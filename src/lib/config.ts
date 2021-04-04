import dotenv from 'dotenv'
import { SketchConfig, SketchParams } from './types'
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
    context,
    time: config.startTime || 0,
    width: canvas.width,
    height: canvas.height,
    animated: config.animate,
  }

  return params
}