import { createSketch, Vec2 } from '../lib'
import { hsl } from '../lib/helpers/color'
import { forN, mapU } from '@dank-inc/lewps'

const TAU = Math.PI * 2

export default createSketch(
  ({
    context,
    width,
    height,
    setStrokeStyle,
    setFillStyle,
    r,
    sin,
    cos,
    setBlendMode,
  }) => {
    // set random seed.

    const points = mapU<Vec2>(50, (u) => [u, 0.5])
    context.translate(width, 0)
    context.rotate(Math.PI / 2)

    return ({ t }) => {
      context.lineCap = 'butt'

      setBlendMode('xor')

      setFillStyle('#000')
      context.fillRect(0, 0, width, height)

      setBlendMode('screen')

      context.lineCap = 'round'

      const time = t() // t(1.05)
      // const time = +new Date() //7
      // console.log('Time =>', time)

      forN(200, (_, uu) => {
        context.beginPath()

        const h = Math.sin(time + uu) * 160 * 2
        const s = uu * uu * 60 + 30
        const l = Math.floor(50 + Math.pow(uu, 10) * 10)

        context.strokeStyle = `hsla(${h},${s}%,${l}%, 0.1)`

        const nu = Math.abs(uu - 1)
        context.filter = `blur(${nu * (width / 25)}px)`
        context.lineWidth = (width / 30) * nu + width / 100 // 20

        for (let [u, v] of points) {
          v = Math.sin(TAU * u + time) * 0.1 + 0.5

          const x =
            (u * width) / 2 +
            (Math.sin(1 * time + nu * Math.PI) * width) / 10 +
            width / 4

          const y =
            v * height +
            (Math.cos(time + 10 * u + uu * Math.PI * 2) * height) / 10 //+ width * 0.4

          context.lineTo(x, y)
        }
        context.stroke()
      })
    }
  },
)
