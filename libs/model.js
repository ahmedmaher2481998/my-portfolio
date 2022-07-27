import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export const loadGLTFMode = (
  scene,
  glbPath,
  options = { receivedShadow: True, castShadow: true }
) => {
  const { castShadow, receiveShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(glbPath, gtlf => {
      const obj = gtlf.scene
      obj.name = '3D-Model'
      obj.position.x = 0
      obj.position.y = 0
      obj.receiveShadow = receiveShadow
      obj.castShadow = castShadow
      scene.add(obj)
      obj.traverse(
        child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
          resolve(obj)
        },
        undefined,
        err => {
          reject(err)
        }
      )
    })
  })
}
