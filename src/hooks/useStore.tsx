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
  removeCube: () => void
  setTexture: () => void
  saveWorld: () => void
  resetWorld: () => void
}

export const useStore = create<GameState>((set) => ({
  texture: 'dirt',
  cubes: [{ key: nanoid(), pos: [2, 0.5, 2], texture: 'dirt' }],
  addCube: (x, y, z) => {
    set((prev) => ({ cubes: [{ key: nanoid(), pos: [x, y, z], texture: prev.texture }, ...prev.cubes] }))
  },
  removeCube: () => null,
  setTexture: () => null,
  saveWorld: () => null,
  resetWorld: () => null,
}))
