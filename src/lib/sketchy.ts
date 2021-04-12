import { Frame, Sketch, SketchParams } from './types'

let lastTime = +new Date()

const animateSketch = (frame: Frame, params: SketchParams) => {
  frame(params)

  const now = +new Date()

  const dt = now - lastTime

  lastTime += dt

  const time = params.time + dt / 1000

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

  params.animated ? animateSketch(frame, params) : frame(params)
}

export const createSketch = (sketch: Sketch) => sketch
