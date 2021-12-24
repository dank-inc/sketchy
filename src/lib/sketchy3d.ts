import * as THREE from 'three'

type Config = {
  containerId: string
  w?: number
  h?: number
  animated?: boolean
}

type SketchParams = {
  three: typeof THREE
  el: HTMLElement
  canvas: HTMLCanvasElement
  renderer: THREE.WebGLRenderer
  state: {
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera
    scene: THREE.Scene
  }
  clock: THREE.Clock
  width: number
  height: number
  animated: boolean
  time: number
  dt: number
  startTime: number
  t: (scale?: number) => number
  TAU: number
  PI: number
}

type Frame = (params: SketchParams) => void
type Sketch = (params: SketchParams) => Frame

export const create3dParams = (config: Config): SketchParams => {
  const el = document.getElementById(config.containerId)

  if (!el) throw new Error(`No element with id ${config.containerId}`)

  for (let child of Array.from(el.children)) {
    el.removeChild(child)
  }

  const canvas = document.createElement('canvas')
  el.appendChild(canvas)

  const context = canvas.getContext('webgl')
  if (!context) throw new Error(`cannot initialize canvas`)
  canvas.width = config.w || el.clientWidth
  canvas.height = config.h || el.clientHeight

  const { width, height } = context.canvas

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(65, width / height, 0.001, 1000)
  camera.position.z = 1.5

  const renderer = new THREE.WebGLRenderer({ canvas, context, antialias: true })

  const state = {
    camera,
    scene,
  }

  return {
    clock: new THREE.Clock(true),
    width,
    height,
    animated: !!config.animated,
    time: 0,
    dt: 0,
    startTime: +new Date(),
    t: () => 0,
    TAU: Math.PI * 2,
    PI: Math.PI,
    three: THREE,
    el,
    canvas,
    renderer,
    state,
  }
}
export const create3dSketch = (sketch: Sketch) => sketch

let requestId: number | null = null

export const load3dSketch = (sketch: Sketch, params: SketchParams) => {
  if (requestId) {
    cancelAnimationFrame(requestId)
    requestId = null
  }

  const frame = sketch(params)

  if (!params.animated) return

  const render = () => {
    const time = +new Date() - params.startTime

    frame({
      ...params,
      time,
      dt: params.clock.getDelta(),
      t: (scale?: number) => (scale ? time * scale : time),
    })
    params.renderer.setSize(params.width, params.height)
    params.renderer.render(params.state.scene, params.state.camera)
    // params.renderer.request(render)
    requestId = requestAnimationFrame(render)
  }
  render()
}
