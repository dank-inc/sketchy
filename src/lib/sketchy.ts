import { Frame, Sketch, SketchParams } from './types'

const animateSketch = (frame: Frame, params: SketchParams) => {
  frame(params)

  const now = +new Date()

  const dt = now - (params.startTime + params.time)

  const time = params.time + dt

  requestAnimationFrame(() =>
    animateSketch(frame, {
      ...params,
      time,
      dt,
      t: (s = 1, o = 0) => 0.001 * time * s + o,
    }),
  )
}

export const loadSketch = (sketch: Sketch, params: SketchParams) => {
  params.context.clearRect(0, 0, params.width, params.height)

  const frame = sketch(params)

  params.animated ? animateSketch(frame, params) : frame(params)
}

export const createSketch = (sketch: Sketch) => sketch
