import { nanoid } from 'nanoid'
import create from 'zustand'

type Cube = {
  key: string
  pos: [number, number, number]
  texture: string
}

type GameState = {
  texture: string
  cubes: Cube[]
  addCube: (x: number, y: number, z: number) => void
  removeCube: (x: number, y: number, z: number) => void
  setTexture: () => void
  saveWorld: () => void
  resetWorld: () => void
}

export const useStore = create<GameState>((set) => ({
  texture: 'dirt',
  cubes: [],
  addCube: (x, y, z) => {
    set((prev) => ({ cubes: [{ key: nanoid(), pos: [x, y, z], texture: prev.texture }, ...prev.cubes] }))
  },
  removeCube: (x, y, z) =>
    set((prev) => ({ cubes: prev.cubes.filter((cube) => cube.pos.join('') !== [x, y, z].join('')) })),
  setTexture: () => null,
  saveWorld: () => null,
  resetWorld: () => null,
}))
