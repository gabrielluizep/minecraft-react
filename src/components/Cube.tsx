import { useBox } from '@react-three/cannon'
import { Ref } from 'react'
import { BufferGeometry, Mesh } from 'three'
import * as textures from '../assets/textures'
import { useStore } from '../hooks'

type Props = {
  position: [number, number, number]
  texture: String
}

export const Cube: React.FC<Props> = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))
  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation()

        const clickedFace = Math.floor(e.faceIndex! / 2)

        const { x, y, z } = ref.current!.position

        if (e.altKey) return removeCube(x, y, z)

        switch (clickedFace) {
          case 0:
            return addCube(x + 1, y, z)

          case 1:
            return addCube(x - 1, y, z)

          case 2:
            return addCube(x, y + 1, z)

          case 3:
            return addCube(x, y - 1, z)

          case 4:
            return addCube(x, y, z + 1)

          case 5:
            return addCube(x, y, z - 1)
        }
      }}
      ref={ref as Ref<Mesh<BufferGeometry>>}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  )
}
