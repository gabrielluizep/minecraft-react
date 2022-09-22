import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create((set) => ({
  textures: 'dirt',
  cubes: [{ key: nanoid(), pos: [2, 0.5, 2], texture: 'dirt' }],
  addCube: (x, y, z) => {
    set((prev) => ({ cubes: [{ key: nanoid(), pos: [x, y, z], texture: prev.texture }, ...prev.cubes] }))
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}))
