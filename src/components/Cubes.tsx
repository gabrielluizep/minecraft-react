import { CubeTexture } from 'three'
import { useStore } from '../hooks'
import { Cube } from './Cube'

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes])

  console.log(cubes)

  return cubes.map(({ key, pos, texture }) => <Cube key={key} position={pos} texture={texture} />)
}
