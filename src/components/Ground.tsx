import { usePlane } from '@react-three/cannon'
import { Ref } from 'react'
import { BufferGeometry, Mesh } from 'three'
import { groundTexture } from '../assets'

type Props = {}

export const Ground = (props: Props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0] }))

  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref as Ref<Mesh<BufferGeometry>>} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}
