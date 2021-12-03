import { Frame, Sketch, SketchyParams } from './types'

let requestId: number | null

let lastSketch: SketchyParams | null

const animateSketch = (frame: Frame, params: SketchyParams) => {
  frame(params)

  const now = +new Date()
  const dt = now - (params.startTime + params.time)
  const time = params.time + dt

  if (!params.animated) return
  // update external data

  requestId = requestAnimationFrame(() =>
    animateSketch(frame, {
      ...params,
      time,
      dt,
      t: (s = 1, o = 0) => 0.001 * time * s + o,
    }),
  )
}

export const loadSketch = (
  sketch: Sketch,
  params: SketchyParams,
): SketchyParams => {
  if (requestId) {
    cancelAnimationFrame(requestId)
    requestId = null
  }
  if (lastSketch) {
    lastSketch.onKill?.()
    lastSketch = null
  }

  lastSketch = params
  params.requestId = Math.floor(Math.random() * 100000)
  params.context.clearRect(0, 0, params.width, params.height)

  const frame = sketch(params)

  params.animated ? animateSketch(frame, params) : frame(params)

  return params
}

export const createSketch = (sketch: Sketch) => sketch
