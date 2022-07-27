import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { ModelContainer, ModelSpinner } from './modelUtils'
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFMode } from '../libs/model'

import React from 'react'

function easeOutCirc(x) {
  //returning  sqrt of (1 - (x - 1 )^4)
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Galaxy = () => {
  const containerRef = useRef()
  const [_camera, setCamera] = useState()
  const [target] = useState(new Three.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new Three.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))
  )
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [scene] = useState(new Three.Scene())
  const [_controls, setControls] = useState()
  useEffect(() => {
    const { current: container } = containerRef
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      const renderer = new Three.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = Three.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)
      // w = 640px h = 240
      // scale ratio 8 / 6
      const scale = ssH * 0.005 + 4.8
      const camera = new Three.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000)
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      //illuminates all objects in the scene equally
      const ambientLight = new Three.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      //keeps rotating
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFMode(scene, './dog.glb', { receivedShadow: false, castShadow: false }).then(() => {
        animate()
        setLoading(false)
      })
      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        // make sure frame = 0-100
        frame = frame <= 100 ? frame + 1 : frame
        if (frame <= 100) {
          const oldPosition = initialCameraPosition
          const rotationSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10

          camera.position.x =
            oldPosition.x * Math.cos(rotationSpeed) + oldPosition.z * Math.sin(rotationSpeed)

          camera.position.z =
            oldPosition.z * Math.cos(rotationSpeed) - oldPosition.x * Math.sin(rotationSpeed)

          camera.lookAt(target)
        } else {
          controls.update()
        }
        //rendering the camera and scene configured above
        renderer.render(scene, camera)
      }
    }

    //eslint-disable-next-line
  }, [])
  return (
    <Box ref={containerRef} className="Galaxy-3d">
      <ModelContainer>
        <ModelSpinner />
      </ModelContainer>
    </Box>
  )
}

export default Galaxy
