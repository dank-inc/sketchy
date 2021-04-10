import { mapUV } from '@dank-inc/lewps'
import { createSketch, Vec2 } from '../lib'

// type the function, and all params are implicitly typed
export default createSketch((params) => {
  // destructure helper functions and convenience variables
  const { hsl, context, setFillStyle, setFilter, sin, cos, lerp } = params

  // initialize your sketch and objects
  const points = mapUV<Vec2>(15, 15, (u, v) => [u, v])
  console.log(points)

  return ({ width, height, t }) => {
    // draw loop function

    setFillStyle('#111')
    context.fillRect(0, 0, width, height)

    for (let [u, v] of points) {
      const x = lerp(u, width, width / 3)
      const y = lerp(v, height, 200)

      setFillStyle(hsl(u, 0.5, 0.5))

      context.fillRect(x, y, cos(v, 1, 20), sin(t(0.3) + u, 1, 50))
    }
  }
})
