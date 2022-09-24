import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Ground, Player, Cubes, FPV, Menu, TextureSelector } from './components'

function App() {
  return (
    <div className="w-[800px] h-[600px] relative">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-0 -translte-y-1/2 text-white">+</div>
      <TextureSelector />
      <Menu />
    </div>
  )
}

export default App
