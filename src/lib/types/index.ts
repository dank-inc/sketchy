import { Lerpr, Scaler, SinCosFn } from '../maff'

export type Frame = (params: SketchyParams) => void
export type Sketch = (params: SketchyParams) => Frame

export type SketchyParams = Canvas2DParams & SketchParams

export type Canvas2DParams = {
  context: CanvasRenderingContext2D

  // render helpers
  requestId: number | null
  setFilter: (val: string) => void
  setFillStyle: (val: string) => void
  setStrokeStyle: (val: string) => void
  setBlendMode: (val: BlendMode) => void
  createGradient: (
    c1: string,
    c2: string,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ) => CanvasGradient
  onKill?: () => void

  // draw helpers
  saver: (body: () => void) => void
  circle: (x: number, y: number, r: number) => void
  shape: (points: [number, number][]) => void
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
  n: Scaler

  lerp: Lerpr
  stop: () => boolean
  data: Record<string, any>
}

export type SketchConfig = {
  containerId?: string
  element?: HTMLElement
  animate?: boolean
  dimensions?: [number, number]
  timeOffset?: number
  data?: Record<string, any>
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
