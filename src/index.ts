import sketches from './sketches'
import sketch from './sketches/hazy-og'

import { loadSketch } from './lib/sketchy'
import { createParams } from './lib/config'

const params = createParams({
  containerId: 'root',
  animate: true,
  dimensions: [250, 250],
  // dimensions: [2400, 2400],
})

// const sketch = sketches[process.env.SKETCH || 'index']

loadSketch(sketch, params)
