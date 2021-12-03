import sketch from './sketches/example'
import townGame from './sketches/town-game'

import { loadSketch } from './lib/sketchy'
import { createParams } from './lib/config'

const params = createParams<any>({
  containerId: 'root',
  animate: true,
  // dimensions: [350, 250],
})

const sketchParams = loadSketch(townGame, params)

console.log(sketchParams)
