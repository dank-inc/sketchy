import sketch from './sketches/example'
import townGame from './sketches/town-game'

import { loadSketch } from './lib/sketchy'
import { createParams } from './lib/config'

const params = createParams({
  containerId: 'root',
  animate: true,
  dimensions: [600, 600],
})

const sketchParams = loadSketch(townGame, params)
