import dotenv from 'dotenv'
import { BlendMode, SketchConfig, SketchParams } from './types'
import { cos, sin, lerp } from './maff'
import { createLinearGradient } from './helpers/color'

dotenv.config()

export const createParams = (config: SketchConfig): SketchParams => {
  const id = config.containerId || 'root'
  const rootElement = config.element || document.getElementById(id)
  if (!rootElement) throw new Error(`No Root Element Found at ${id}`)

  const canvas = document.createElement('canvas')
  rootElement.appendChild(canvas)
  const context = canvas.getContext('2d')
  if (!context) throw new Error(`cannot initialize canvas`)

  if (config.dimensions) {
    const [x, y] = config.dimensions
    canvas.width = x
    canvas.height = y
  } else {
    canvas.width = rootElement.clientWidth
    canvas.height = rootElement.clientHeight
  }

  context.lineCap

  const params: SketchParams = {
    // state
    // config
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
    setStrokeStyle: (val: string) => (context.fillStyle = val),
    setBlendMode: (val: BlendMode) => (context.globalCompositeOperation = val),

    // generators
    createGradient: () => createLinearGradient(context),

    // maff
    TAU: Math.PI * 2,
    PI: Math.PI,
    abs: Math.abs,
    sin,
    cos,
    t: () => 0,
    lerp,
  }

  return params
}
