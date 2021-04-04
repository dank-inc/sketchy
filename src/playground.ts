import { Sketch, SketchParams, Frame } from './lib'

type SketchGenerator = (sketch: Sketch) => Frame

const createSketch: SketchGenerator = (sketch) => sketch

// frame
const sketch = createSketch((params) => {
  // init

  return () => {
    // draw loop
  }
})
