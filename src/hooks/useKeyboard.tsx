import { useCallback, useEffect, useState } from 'react'

type actionKey =
  | 'moveForward'
  | 'moveBackward'
  | 'moveLeft'
  | 'moveRight'
  | 'jump'
  | 'dirt'
  | 'grass'
  | 'glass'
  | 'wood'
  | 'log'

const actionsByKey: () => actionKey = (key: KeyboardEvent['code']) => {
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
  }

  const action = keyActionMap[key]

  if (!action) {
    throw new Error(`Unknown action to key: ${key}`)
  }

  return action
}

type actions = {
  moveForward: boolean
  moveBackward: boolean
  moveLeft: boolean
  moveRight: boolean
  jump: boolean
  texture1: boolean
  texture2: boolean
  texture3: boolean
  texture4: boolean
  texture5: boolean
}

export const useKeyboard = () => {
  const [actions, setActions] = useState<actions>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  })

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const action = actionsByKey(e.code)

    if (action) {
      setActions((prev) => ({ ...prev, [action]: true }))
    }
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const action = actionsByKey(e.code)

    if (action) {
      setActions((prev) => ({ ...prev, [action]: false }))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return actions
}
