import { Frame, Sketch, SketchParams } from '../types'
import { controls } from '../utils/controls'

const animateSketch = (frame: Frame, params: SketchParams) => {
  frame(params)

  setInterval(() => {
    // TODO: better than this

    frame({ ...params, time: (params.time += 0.1) })
  }, 1000 / 15)
}

export const loadSketch = (createSketch: Sketch, params: SketchParams) => {
  params.context.clearRect(0, 0, params.width, params.height)

  const frame = createSketch(params)

  if (params.animated) {
    console.log('animating!')
    animateSketch(frame, params)
  } else {
    frame(params)
  }

  controls({
    onNext: () => {
      frame({ ...params, time: (params.time += 0.5) })
    },
    onPrev: () => {
      frame({ ...params, time: (params.time -= 0.5) })
    },
  })
}
