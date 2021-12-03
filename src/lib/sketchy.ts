import { Frame, Sketch, SketchyParams } from './types'

let requestId: number | null

const animateSketch = <T>(frame: Frame<T>, params: SketchyParams<T>) => {
  frame(params)

  console.log('animating', params.requestId)

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

export const loadSketch = <T>(
  sketch: Sketch<T>,
  params: SketchyParams<T>,
): SketchyParams<T> => {
  if (requestId) {
    cancelAnimationFrame(requestId)
    requestId = null
  }
  params.requestId = Math.floor(Math.random() * 100000)
  params.context.clearRect(0, 0, params.width, params.height)

  const frame = sketch(params)

  params.animated ? animateSketch(frame, params) : frame(params)

  return params
}

export const createSketch = <T>(sketch: Sketch<T>) => sketch
