import sketches from './sketches'

import { loadSketch } from './lib/sketchy'
import { createParams } from './lib/config'

const params = createParams({
  containerId: 'root',
  animate: true,
  // dimensions: [1200, 1200],
})

const sketch = sketches[process.env.SKETCH || 'example']

loadSketch(sketch, params)
