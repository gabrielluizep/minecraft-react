import { TextureLoader } from 'three'

import { dirtImg, glassImg, grassImg, logImg, woodImg } from './index'

const loader = new TextureLoader()

export const dirtTexture = loader.load(dirtImg)
export const glassTexture = loader.load(glassImg)
export const grassTexture = loader.load(grassImg)
export const logTexture = loader.load(logImg)
export const woodTexture = loader.load(woodImg)

export const groundTexture = loader.load(grassImg)
