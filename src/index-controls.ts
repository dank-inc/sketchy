import sketch from './sketches/example'
import townGame from './sketches/town-game'
import theMatrix from './sketches/the-matrix'

import { getInputElement, setInputValue } from './utils/query'
import { create3dParams, load3dSketch } from './lib'
import theMatrix3d from './sketches/the-matrix-3d'

const configParams = create3dParams({
  containerId: 'root',
  // animate: true,
  // dimensions: [600, 600],
  data: {
    x1: 1,
    y1: 0,
    x2: 0,
    y2: 1,
    rotate: 0,
    scale: 1,
  },
  animated: true,
})

const sketchParams = load3dSketch(theMatrix3d, configParams)!

const params = sketchParams || configParams

console.log('params', params)

// get all .slider
const sliders = document.querySelectorAll(
  '.slider',
) as NodeListOf<HTMLInputElement>
// add listeners, set value to innerhtml of to "#value-[slider.id]"
sliders.forEach((slider) => {
  // set initial value based on params.data
  document.querySelector(`#value-${slider.id}`)!.innerHTML =
    params.data[slider.id]

  slider.value = params.data[slider.id]

  slider.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement

    document.querySelector(`#value-${slider.id}`)!.innerHTML = el.value

    params.data[slider.id] = el?.value
  })
})

const rotationControl = getInputElement('rotation-control')

// set min and max to -pi and pi
rotationControl.min = (-Math.PI).toString()
rotationControl.max = Math.PI.toString()

rotationControl.addEventListener('input', (e) => {
  const el = e.target as HTMLInputElement

  const value = parseFloat(el.value)

  // document.querySelector(`#}`)!.innerHTML = el.value
  params.data.x1 = Math.cos(value)
  document.querySelector('#value-x1')!.innerHTML = params.data.x1.toFixed(3)
  // set respective slider values
  setInputValue('x1', params.data.x1)

  params.data.y1 = Math.sin(value)
  document.querySelector('#value-y1')!.innerHTML = params.data.y1.toFixed(3)
  setInputValue('y1', params.data.y1)

  params.data.x2 = -Math.sin(value)
  document.querySelector('#value-x2')!.innerHTML = params.data.x2.toFixed(3)
  setInputValue('x2', params.data.x2)

  params.data.y2 = Math.cos(value)
  document.querySelector('#value-y2')!.innerHTML = params.data.y2.toFixed(3)
  setInputValue('y2', params.data.y2)
})

// scale control
const scaleControl = getInputElement('scale-control')

scaleControl.addEventListener('input', (e) => {
  const el = e.target as HTMLInputElement

  const value = parseFloat(el.value)

  params.data.x1 = value
  document.querySelector('#value-x1')!.innerHTML = params.data.x1.toFixed(3)
  setInputValue('x1', params.data.x1)

  params.data.y2 = value
  document.querySelector('#value-y2')!.innerHTML = params.data.y2.toFixed(3)
  setInputValue('y2', params.data.y2)

  params.data.scale = value
})
