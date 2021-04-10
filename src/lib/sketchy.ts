import { Frame, Sketch, SketchParams } from './types'

const animateSketch = (frame: Frame, params: SketchParams) => {
  frame(params)

  const time = params.time + 0.01

  requestAnimationFrame(() =>
    animateSketch(frame, {
      ...params,
      time,
      t: (s = 1, o = 0) => time * s + o,
    }),
  )
}

export const loadSketch = (sketch: Sketch, params: SketchParams) => {
  params.context.clearRect(0, 0, params.width, params.height)

  const frame = sketch(params)

  if (params.animated) {
    console.log('animating!')
    animateSketch(frame, params)
  } else {
    frame(params)
  }
}

export const createSketch = (sketch: Sketch) => sketch
