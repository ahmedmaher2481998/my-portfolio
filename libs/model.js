import { GLTFLoader } from 'three/examples/jsm/loaders'
export const loadGLTFMode = (
  scene,
  glbPath,
  options = { receivedShadow: True, castShadow: true }
) => {
  const { castShadow, receivedShadow } = options
  return new Promise((resolved, rejected) => {
    const loader = new GLTFLoader()
  })
}
