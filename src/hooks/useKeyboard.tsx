import { useCallback, useEffect, useState } from 'react';

type possibleKeys =
  | 'KeyW'
  | 'KeyS'
  | 'KeyA'
  | 'KeyD'
  | 'Space'
  | 'Digit1'
  | 'Digit2'
  | 'Digit3'
  | 'Digit4'
  | 'Digit5';

const actionsByKey = (key: possibleKeys): string | undefined => {
  const keyActionMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  };

  const action = keyActionMap[key];

  if (!action) return;

  return action;
};

type actions = {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
  dirt: boolean;
  grass: boolean;
  glass: boolean;
  wood: boolean;
  log: boolean;
};

export const useKeyboard = () => {
  const [actions, setActions] = useState<actions>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const action = actionsByKey(e.code as possibleKeys);

    if (action) {
      setActions(prev => ({ ...prev, [action]: true }));
    }
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const action = actionsByKey(e.code as possibleKeys);

    if (action) {
      setActions(prev => ({ ...prev, [action]: false }));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};
