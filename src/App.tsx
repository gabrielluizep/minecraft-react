import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Ground, Player } from './components'
import { Cubes } from './components/Cubes'
import { FPV } from './components/FPV'
import { Menu } from './components/Menu'
import { TextureSelector } from './components/TextureSelector'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />

        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>
      <div className="cursor absolute centered">+</div>
      <TextureSelector />
      <Menu />
    </>
  )
}

export default App
