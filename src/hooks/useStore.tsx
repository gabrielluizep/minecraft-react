import { nanoid } from 'nanoid'
import create from 'zustand'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

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
  setTexture: (texture: string) => void
  saveWorld: () => void
  resetWorld: () => void
}

export const useStore = create<GameState>((set) => ({
  texture: 'dirt',
  cubes: getLocalStorage('cubes') || [],
  addCube: (x, y, z) => {
    set((prev) => ({ cubes: [{ key: nanoid(), pos: [x, y, z], texture: prev.texture }, ...prev.cubes] }))
  },
  removeCube: (x, y, z) =>
    set((prev) => ({ cubes: prev.cubes.filter((cube) => cube.pos.join('') !== [x, y, z].join('')) })),
  setTexture: (texture) => set({ texture }),
  saveWorld: () =>
    set((prev) => {
      setLocalStorage('cubes', prev.cubes)

      return prev
    }),
  resetWorld: () => set(() => ({ cubes: [] })),
}))
