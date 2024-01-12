import { useEffect } from 'react';

import { dirtImg, glassImg, grassImg, logImg, woodImg } from '../assets';
import { useKeyboard, useStore } from '../hooks';

import type { texture } from '../types';

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const [activeTexture, setTexture] = useStore(state => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };

    const pressedTexture = Object.entries(textures).find(([_, v]) => v) as
      | [texture, boolean]
      | undefined;

    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex">
      {Object.entries(images).map(([k, src]) => {
        return (
          <img
            key={k}
            src={src}
            alt={k}
            className={`${
              k === activeTexture ? 'border-2 border-red-500 scale-150' : ''
            }`}
          />
        );
      })}
    </div>
  );
};
