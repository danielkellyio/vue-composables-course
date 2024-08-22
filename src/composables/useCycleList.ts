import { ref } from 'vue'

export const useCycleList = (list: any[]) => {
  return {
    state: ref(''),
    prev: () => {},
    next: () => {},
    go: () => {}
  }
}
