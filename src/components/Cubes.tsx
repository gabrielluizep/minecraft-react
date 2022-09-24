import { Cube } from './'

import { useStore } from '../hooks'

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes])

  return (
    <>
      {cubes.map(({ key, pos, texture }) => (
        <Cube key={key} position={pos} texture={texture} />
      ))}
    </>
  )
}
