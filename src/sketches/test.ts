import { Sketch, Vec2 } from '../types'
import { TAU } from '../utils/maff'
import { forN, mapU } from '@dank-inc/lewps'

export const sketch: Sketch = () => {
  console.log('init!')
  const points = mapU<Vec2>(50, (u) => [u, 0.5])

  return ({ context, width, height, time }) => {
    context.lineCap = 'butt'
    // bg
    // context.fillStyle = `hsl(${time * 360}, 100%, 20%)`
    context.fillStyle = '#111'
    context.fillRect(0, 0, width, height)

    // fg

    forN(100, (_, uu) => {
      context.beginPath()
      // context.strokeStyle = `rgba(255,255,255,${0.1})`
      context.strokeStyle = `hsla(${
        Math.sin(time + uu) * 160 * 2
      },100%,30%,0.5)`
      // console.log(uu, context.strokeStyle)
      context.lineWidth = 20

      for (let [u, v] of points) {
        v = Math.sin(TAU * u + time) * 0.1 + 0.5
        const x =
          (u * width) / 2 + Math.sin(1 * time + uu * Math.PI) * 200 + width / 4
        const y = v * height + Math.cos(time + 10 * u + uu * Math.PI * 2) * 200 //+ width * 0.4
        context.lineTo(x, y)
      }
      context.stroke()
    })
  }
}

export default sketch
