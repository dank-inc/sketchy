import { createSketch, Vec2 } from '../lib'
import { hsl } from '../lib/helpers/color'
import { forN, mapU } from '@dank-inc/lewps'

const TAU = Math.PI * 2

export default createSketch(
  ({ context, width, height, setFillStyle, r, sin, cos, PI, TAU }) => {
    // set random seed.

    const points = mapU<Vec2>(50, (u) => [u, 0.5])
    context.translate(width, 0)
    context.rotate(Math.PI / 2)

    return ({ t }) => {
      context.lineCap = 'butt'

      setFillStyle('#000')
      context.fillRect(0, 0, width, height)

      context.lineCap = 'round'

      const time = t(0.1)
      // const time = +new Date() //7
      // console.log('Time =>', time)

      forN(200, (_, uu) => {
        context.beginPath()
        // context.strokeStyle = `rgba(255,255,255,${0.1})`

        const h = Math.sin(time + uu) * 160 * 2
        const s = uu * uu * 60 + 30
        const l = Math.floor(50 + Math.pow(uu, 10) * 30)

        // setStrokeStyle(hsl(h, s, 0.5, 0.8))
        context.strokeStyle = `hsla(${h},${s}%,${l}%, 0.8)`

        const nu = Math.abs(uu - 1)

        context.filter = `blur(${nu * (width / 25)}px)`

        context.lineWidth = (width / 30) * nu + width / 100 // 20

        for (let [u, v] of points) {
          v = sin(u + time, 0.5, 0.2, 0.5)

          const x = sin(time + sin(uu, 0.4), 1, width * 0.4, width * 0.5)

          const y = v * height + cos(time + uu, 0.5, height * 0.2) //+ width * 0.4

          context.lineTo(x, y)
        }
        context.stroke()
      })
    }
  },
)
