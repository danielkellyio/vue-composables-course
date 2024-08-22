import { ref, computed, toRef, type Ref, type MaybeRefOrGetter } from 'vue'

export interface useCycleListConfig {
  fallbackIndex?: number
  fallbackValue?: any
}

export const useCycleListConfigDefaults: useCycleListConfig = {
  fallbackIndex: undefined,
  fallbackValue: undefined
}

export const useCycleList = (list: MaybeRefOrGetter<any[]>, config?: useCycleListConfig) => {
  const _config = {
    ...useCycleListConfigDefaults,
    ...config
  }

  console.log(_config)
  const activeIndex = ref(0)
  const _list = toRef(list)
  const state = computed({
    get() {
      return _list.value[activeIndex.value]
    },
    set(value) {
      const foundIndex = _list.value.indexOf(value)
      if (foundIndex >= 0) {
        activeIndex.value = foundIndex
      } else {
        throw Error(
          `${value} is not found in the useCycleList list and cannot be set with state.value = ''`
        )
      }
    }
  })

  function next() {
    if (activeIndex.value === _list.value.length - 1) {
      activeIndex.value = 0
    } else {
      activeIndex.value++
    }
  }

  function prev() {
    if (activeIndex.value === 0) {
      activeIndex.value = _list.value.length - 1
    } else {
      activeIndex.value--
    }
  }

  function go(index: number) {
    if (index >= _list.value.length) {
      throw new Error(
        `Cannot go to index ${index}. The list provided to useCycleList is not that long.`
      )
    } else {
      activeIndex.value = index
    }
  }

  return {
    state,
    prev,
    next,
    go
  }
}
