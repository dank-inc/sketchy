import { create3dParams, create3dSketch, load3dSketch } from './lib/sketchy3d'

const params = create3dParams({
  containerId: 'root',
  animated: true,
  w: 600,
  h: 600,
})

const sketch = create3dSketch(({ state, three, renderer }) => {
  const mesh = new three.Mesh(
    new three.BoxGeometry(0.5, 0.5, 0.5),
    new three.MeshPhongMaterial({ color: 0xff0000 }),
  )

  const light = new three.PointLight(0xffffff, 1, 100)
  light.position.set(0, 3, 10)
  state.scene.add(light)

  state.camera.position.y = 0.5
  state.camera.lookAt(mesh.position)

  state.scene.add(mesh)

  renderer.setClearColor(0x111111, 1)

  return ({ t }) => {
    console.log('render', t(0.001))
    mesh.rotation.y = t(0.001)

    const colors = ['#ff0000', '#00ff00', '#0000ff']
    mesh.material.color = new three.Color(
      colors[Math.floor(t(0.001) % colors.length)],
    )
  }
})

const sketchParams = load3dSketch(sketch, params)
