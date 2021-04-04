import { forU } from '@dank-inc/lewps'
import { Sketch } from '../lib/types'
import { TAU } from '../utils/maff'

// type the function, and all params are implicitly typed
export const sketch: Sketch = () => {
  // initialize your sketch and objects
  const points = []

  const xSteps = 5
  const ySteps = 5

  forU(xSteps, (u) => {
    forU(ySteps, (v) => {
      points.push({ u, v })
    })
  })

  return ({ context, width, height, time }) => {
    // draw loop function
    context.fillStyle = '#111'
    context.fillRect(0, 0, width, height)

    context.fillStyle = '#ccc'
    for (let { u, v } of points) {
      const x = u * width
      const y = v * height

      context.save()
      context.translate(width / xSteps / 2, height / ySteps / 2)
      context.fillRect(
        x,
        y,
        Math.cos(time + v * TAU) * 200,
        Math.sin((2 * u + (0.2 * time + v) * 2) * Math.PI) * 20,
      )
      context.restore()
    }
  }
}

export default sketch
