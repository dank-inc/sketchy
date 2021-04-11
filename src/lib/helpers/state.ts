import { SketchState, SketchStateSetter } from '../types'

export const createState = <T>(
  initialState: T,
): [SketchState<T>, SketchStateSetter<T>] => {
  const state = { ...initialState }

  const setState = (key: keyof T, value: T[keyof T]) => {
    state[key] = value
  }

  return [state, setState]
}
