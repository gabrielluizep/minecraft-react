import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Ground, Player } from './components'
import { FPV } from './components/FPV'

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
        </Physics>
      </Canvas>
      <div className="cursor absolute centered">+</div>
    </>
  )
}

export default App
