import dotenv from 'dotenv'

import { BlendMode, SketchConfig, SketchyParams } from './types'
import { cos, sin, lerp, r, n } from './maff'
import { createLinearGradient } from './helpers/color'
import { arc, drawShape, saver } from './helpers/draw'
import { Vec2 } from './types/common'

dotenv.config()

export const createCanvas = (
  el: HTMLElement,
  dimensions?: Vec2,
): HTMLCanvasElement => {
  const canvas =
    document.querySelector('canvas') || document.createElement('canvas')

  el.appendChild(canvas)

  if (dimensions) {
    const [x, y] = dimensions
    canvas.width = x
    canvas.height = y
  } else {
    canvas.width = el.clientWidth
    canvas.height = el.clientHeight
  }

  return canvas
}

export const createParams = (config: SketchConfig): SketchyParams => {
  const id = config.containerId || config.element?.id || 'sketchy'
  const rootElement = config.element || document.getElementById(id)
  if (!rootElement) throw new Error(`No Root Element Found at ${id}`)

  const canvas = createCanvas(rootElement, config.dimensions)

  const context = canvas.getContext('2d')
  if (!context) throw new Error(`cannot initialize canvas`)

  const params: SketchyParams = {
    data: config.data || {},
    // config
    requestId: null,
    time: config.timeOffset || 0,
    dt: 0,
    startTime: +new Date(),
    width: canvas.width,
    height: canvas.height,
    animated: config.animate,
    context,

    // render helpers
    setFilter: (val: string) => (context.filter = val),
    setFillStyle: (val: string) => (context.fillStyle = val),
    setStrokeStyle: (val: string) => (context.strokeStyle = val),
    setBlendMode: (val: BlendMode) => (context.globalCompositeOperation = val),

    // draw helpers
    saver: (body: () => void) => saver(context, body),
    circle: (x, y, r) => arc(context, x, y, r),
    shape: (points) => drawShape(context, points),

    // generators
    createGradient: (
      c1: string,
      c2: string,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ) => createLinearGradient(context, c1, c2, x1, y1, x2, y2),

    // maff
    TAU: Math.PI * 2,
    PI: Math.PI,
    abs: Math.abs,
    sin,
    cos,
    t: () => 0,
    r,
    n,
    lerp,
    stop: () => false,
  }

  return params
}
