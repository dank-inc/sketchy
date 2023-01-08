import { mapXY } from '@dank-inc/lewps'
import { create3dSketch } from '../lib'

export default create3dSketch((params) => {
  const points = mapXY(13, 13, (u, v) => {
    const x = (u - 0.5) * 2
    const y = (v - 0.5) * 2
    return [x, y]
  })
  const THREE = params.three

  // create cube

  const cubes = points.map((point, i) => {
    const s = 0.05
    const u = i / points.length

    const color = `hsl(${u * 360}, 100%, 60%)`

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(s, s, s * 15),
      new THREE.MeshPhongMaterial({ color }),
    )
    cube.position.set(point[0], point[1], 0)
    params.state.scene.add(cube)
    return { ...cube, x: point[0], y: point[1] }
  })

  // move camera back a bit
  params.state.camera.position.z = 1.3

  const light = new THREE.PointLight(0xffffff, 0.7, 100)
  light.position.set(5, 3, 5)
  params.state.scene.add(light)

  return ({ width, height, t }) => {
    // draw loop function
    const { x1, y1, x2, y2, rotate, scale } = params.data

    cubes.forEach((cube, i) => {
      const u = i / cubes.length

      const x = x1 * cube.x + y1 * cube.y
      const y = x2 * cube.x + y2 * cube.y
      const z = 0

      // cube.rotation.z = scale * Math.PI
      // cube.scale.z = z * 10

      cube.position.set(x, y, z)
    })
  }
})
