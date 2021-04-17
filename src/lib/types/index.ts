import { Lerpr, Scaler, SinCosFn } from '../maff'
import { LinearGradientGeneratorFn } from '../helpers/color'

export type Sketch = (params: SketchyParams) => Frame
export type Frame = (params: SketchyParams) => void

export type SketchState<T = {}> = T
export type SketchStateSetter<T> = (key: keyof T, value: T[keyof T]) => void

export type SketchyParams = Canvas2DParams & SketchParams
export type Canvas2DParams = {
  // render helpers
  context: CanvasRenderingContext2D
  setFilter: (val: string) => void
  setFillStyle: (val: string) => void
  setStrokeStyle: (val: string) => void
  setBlendMode: (val: BlendMode) => void
  createGradient: LinearGradientGeneratorFn
}

export type SketchParams = {
  // config
  time: number
  startTime: number
  dt: number
  width: number
  height: number
  animated?: boolean
  // Maff
  TAU: number
  PI: number

  abs: Math['abs']
  sin: SinCosFn
  cos: SinCosFn
  t: Scaler
  r: Scaler
  lerp: Lerpr
}

export type SketchConfig = {
  containerId?: string
  element?: HTMLElement
  animate?: true
  dimensions?: [number, number]
  timeOffset?: number
}

export type BlendMode =
  | 'source-over'
  | 'source-in'
  | 'source-out'
  | 'source-atop'
  | 'destination-over'
  | 'destination-in'
  | 'destination-out'
  | 'destination-atop'
  | 'lighter'
  | 'copy'
  | 'xor'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'
