# Sketchy!

A super-dank sketching library built with ♥ and typescript.

# How to use!

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

```
