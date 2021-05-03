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

    const points = mapU<Vec2>(150, (u) => [u, 0.5])
    context.translate(width, 0)
    context.rotate(Math.PI / 2)

    return ({ t }) => {
      context.lineCap = 'butt'

      // setBlendMode('xor')

      setFillStyle('#000')
      context.fillRect(0, 0, width, height)

      // setBlendMode('screen')

      context.lineCap = 'round'

      // const time = 3.1
      const time = t() // t(1.05)
      // const time = +new Date() //7
      // console.log('Time =>', time)

      forN(20, (_, uu) => {
        context.beginPath()
        const nu = Math.abs(uu - 1)

        const time = t(1, uu * 4)

        const h = Math.sin(t(0.25) + uu) * 160 * 2
        const s = uu * uu * 60 + 30
        const l = Math.floor(40 + Math.pow(uu, 5) * 30)

        context.strokeStyle = `hsla(${h},${s}%,${l}%, 1)`

        context.lineWidth = (width / 10) * nu + width / 100 // 20
        context.filter = `blur(${nu * (width / 20)}px)`

        for (let [u, v] of points) {
          v = Math.sin(TAU * u + time) * 0.1 + 0.5

          const x = (u * width) / 2 + width / 4
          // (Math.sin(1 * time + nu * Math.PI) * width) / 10 +

          const y =
            v * height +
            (Math.cos(time + 10 * u + uu * Math.PI * 2) * height) / 10 //+ width * 0.4

          const nv = Math.abs(1 - u)

          context.lineTo(x, y * nv + height / 2)
        }
        context.stroke()
      })
    }
  },
)
