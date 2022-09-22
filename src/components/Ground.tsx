import { usePlane } from '@react-three/cannon'
import { NearestFilter, RepeatWrapping } from 'three'
import { groundTexture } from '../assets'

type Props = {}

export const Ground = (props: Props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 4, 0, 0], position: [0, 0, 0] }))

  groundTexture.magFilter = NearestFilter
  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}
