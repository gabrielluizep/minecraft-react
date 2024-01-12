import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { type ClassValue } from 'clsx';

import { cn } from '../lib/utils';
import { Cubes, FPV, Ground, Menu, Player, TextureSelector } from './';

export const Game = ({ className }: { className?: ClassValue }) => {
  return (
    <div className={cn('relative', className)}>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />d
        <Physics>
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>
      <div className="absolute top-1/2 left-1/2 -translate-x-0 -translte-y-1/2 text-white">
        +
      </div>
      <TextureSelector />
      <Menu />
    </div>
  );
};
