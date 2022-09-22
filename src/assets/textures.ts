import { NearestFilter, TextureLoader } from 'three'

import { dirtImg, glassImg, grassImg, logImg, woodImg } from './index'

const loader = new TextureLoader()

const dirtTexture = loader.load(dirtImg)
const glassTexture = loader.load(glassImg)
const grassTexture = loader.load(grassImg)
const logTexture = loader.load(logImg)
const woodTexture = loader.load(woodImg)

const groundTexture = loader.load(grassImg)

dirtTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
groundTexture.magFilter = NearestFilter

export { dirtTexture, glassTexture, grassTexture, logTexture, woodTexture, groundTexture }
