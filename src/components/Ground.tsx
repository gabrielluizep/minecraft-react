import { Ref } from 'react'

import { usePlane } from '@react-three/cannon'
import { BufferGeometry, Mesh } from 'three'

import { useStore } from '../hooks'
import { groundTexture } from '../assets'

type Props = {}

export const Ground = (props: Props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0] }))
  const [addCube] = useStore((state) => [state.addCube])

  groundTexture.repeat.set(100, 100)

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation()

        const [x, y, z] = Object.values(e.point).map((n) => Math.trunc(n))

        if (e.nativeEvent.button === 2) addCube(x, y, z)
      }}
      ref={ref as Ref<Mesh<BufferGeometry>>}
      receiveShadow
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}
