import { nanoid } from 'nanoid'
import create from 'zustand'

const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key)

  if (value) return JSON.parse(value)
}
const setLocalStorage = (key: string, value: any) => window.localStorage.setItem(key, JSON.stringify(value))

type GameState = {
  texture: texture
  cubes: Cube[]
  addCube: (x: number, y: number, z: number) => void
  removeCube: (x: number, y: number, z: number) => void
  setTexture: (texture: texture) => void
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
  setTexture: (texture: texture) => set({ texture }),
  saveWorld: () =>
    set((prev) => {
      setLocalStorage('cubes', prev.cubes)

      return prev
    }),
  resetWorld: () => set(() => ({ cubes: [] })),
}))
