import { Lerpr, Scaler, SinCosFn } from '../maff'
import { LinearGradientGeneratorFn } from '../helpers/color'

export type SketchFrame = (params: SketchParams) => void

// export type Sketch = (params: SketchParams) => SketchFrame

export type Sketch = (params: SketchParams) => Frame // generator
export type Frame = (params: SketchParams) => void // stateless frame

export type SketchState<T = {}> = T
export type SketchStateSetter<T> = (key: keyof T, value: T[keyof T]) => void

export type SketchParams = {
  // config
  time: number
  startTime: number
  dt: number
  width: number
  height: number
  animated?: boolean

  context: CanvasRenderingContext2D
  // Maff
  TAU: number
  PI: number
  sin: SinCosFn
  cos: SinCosFn
  t: Scaler
  lerp: Lerpr

  // render helpers
  setFilter: (val: string) => void
  setFillStyle: (val: string) => void
  setStrokeStyle: (val: string) => void

  // generators
  createGradient: LinearGradientGeneratorFn
}

export type SketchConfig = {
  containerId?: string
  animate?: true
  dimensions?: [number, number]
  timeOffset?: number
}
