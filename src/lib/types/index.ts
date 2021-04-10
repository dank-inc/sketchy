import { BlurFn, HSLFn } from '../helpers'
import { Lerpr, Scaler, SinCosFn } from '../maff'

export type SketchFrame = (params: SketchParams) => void

// export type Sketch = (params: SketchParams) => SketchFrame

export type Sketch = (params: SketchParams) => Frame // generator
export type Frame = (params: SketchParams) => void // stateless frame

export type SketchParams = {
  // config
  time: number
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

  // helper functions
  hsl: HSLFn
  blur: BlurFn

  // maff
}

export type SketchConfig = {
  containerId?: string
  animate?: true
  dimensions?: [number, number]
  startTime?: number
}
