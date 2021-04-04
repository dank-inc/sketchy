import { Frame, Sketch, SketchParams } from './types'

const animateSketch = (frame: Frame, params: SketchParams) => {
  frame(params)
  console.log('animated!')

  // TODO: delta time

  requestAnimationFrame(() =>
    animateSketch(frame, { ...params, time: (params.time += 0.01) }),
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

// TODO: fancy typed generator
// type CreateSketch = () => Sketch

export const createSketch = (sketch: Sketch) => sketch
