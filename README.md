# Sketchy!

A super-dank sketching library built with ♥ and typescript.

# Getting Started

This library is a nice typescript wrapper for the 2d Web canvas.

start by creating a config object:

```ts
const params = createParams({
  containerId: 'root', // id of the container where you want a canvas
  animate: true, // animated?
  // dimensions: [1200, 1200], // size of canvas
})
```

then pass your sketch & config object into the sketch loader function:

```ts
import sketch from './sketches/sketch'

loadSketch(sketch, params)
```

## Example Sketch

```ts
import { forU } from '@dank-inc/lewps'
import { Sketch } from '@dank-inc/sketchy/types'

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
        Math.cos(time + v * Math.PI * 2) * 200,
        Math.sin((2 * u + (0.2 * time + v) * 2) * Math.PI) * 20,
      )
      context.restore()
    }
  }
}

export default sketch
```

# Todo

- [ ] compile to js script
- [ ] threejs
- [ ] sketch browser
- [ ] sketch server
