import { Lerpr, Scaler, SinCosFn } from '../maff'
import { LinearGradientGeneratorFn } from '../helpers/color'

export type Frame = <T>(params: SketchyParams<T>) => void
export type Sketch = <T>(params: SketchyParams<T>) => Frame<T>

export type SketchState<T> = T
export type SketchStateSetter<T> = (key: keyof T, value: T[keyof T]) => void

export type SketchyParams<T> = Canvas2DParams & SketchParams<T>

export type Canvas2DParams = {
  context: CanvasRenderingContext2D

  // render helpers
  setFilter: (val: string) => void
  setFillStyle: (val: string) => void
  setStrokeStyle: (val: string) => void
  setBlendMode: (val: BlendMode) => void
  createGradient: LinearGradientGeneratorFn

  // draw helpers
  saver: (body: () => void) => void
  circle: (x: number, y: number, r: number) => void
}

export type SketchParams<T> = {
  // config
  data?: T
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
  n: Scaler

  lerp: Lerpr
}

export type SketchConfig<T> = {
  data: T
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
