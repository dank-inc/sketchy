import dotenv from 'dotenv'
import { SketchConfig, SketchParams } from './types'
import { cos, sin, lerp } from './maff'
import { createControls } from './helpers/controls'

dotenv.config()

export const createParams = (config: SketchConfig): SketchParams => {
  const id = config.containerId || 'root'
  const rootElement = document.getElementById(id)
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

  const params: SketchParams = {
    // state
    // config
    time: config.startTime || 0,
    width: canvas.width,
    height: canvas.height,
    animated: config.animate,
    context,

    // render helpers
    setFilter: (val: string) => (context.filter = val),
    setFillStyle: (val: string) => (context.fillStyle = val),

    // maff
    TAU: Math.PI * 2,
    PI: Math.PI,
    sin,
    cos,
    t: () => 0,
    lerp,
  }

  return params
}
