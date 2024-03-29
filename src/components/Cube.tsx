import React, { Ref, useState } from 'react';

import { useBox } from '@react-three/cannon';
import { BufferGeometry, Mesh } from 'three';

import { useStore } from '../hooks';

import {
  dirtTexture,
  glassTexture,
  grassTexture,
  logTexture,
  woodTexture,
} from '../assets';

const textures = {
  dirt: dirtTexture,
  grass: grassTexture,
  glass: glassTexture,
  wood: woodTexture,
  log: logTexture,
};

type Props = {
  position: [number, number, number];
  texture: keyof typeof textures;
};

export const Cube: React.FC<Props> = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));
  const [addCube, removeCube] = useStore(state => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTexture = textures[texture];

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <mesh
      onPointerMove={e => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={e => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={e => {
        e.stopPropagation();

        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        const clickedFace = Math.floor(e.faceIndex! / 2);

        if (!ref.current) return;

        const { x, y, z } = ref.current.position;

        if (e.nativeEvent.button === 0) return removeCube(x, y, z);

        switch (clickedFace) {
          case 0:
            return addCube(x + 1, y, z);

          case 1:
            return addCube(x - 1, y, z);

          case 2:
            return addCube(x, y + 1, z);

          case 3:
            return addCube(x, y - 1, z);

          case 4:
            return addCube(x, y, z + 1);

          case 5:
            return addCube(x, y, z - 1);
        }
      }}
      ref={ref as Ref<Mesh<BufferGeometry>>}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        opacity={texture === 'glass' ? 0.6 : 1}
        attach="material"
        map={activeTexture}
      />
    </mesh>
  );
};
