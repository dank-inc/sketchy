import sketch from './sketches/example'

import { loadSketch } from './lib/sketchy'
import { createParams } from './lib/config'

const params = createParams({
  containerId: 'root',
  animate: true,
  dimensions: [350, 250],
  data: {},
})

loadSketch(sketch, params)
