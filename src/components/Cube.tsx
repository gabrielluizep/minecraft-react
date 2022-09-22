import { useBox } from '@react-three/cannon'
import * as textures from '../assets/textures'

type Props = {
  position: [number, number, number]
  texture: String
}

export const Cube: React.FC<Props> = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  )
}
