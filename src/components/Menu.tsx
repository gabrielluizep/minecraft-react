import { useStore } from '../hooks'

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

  return (
    <div className="absolute top-3 left-3 space-x-3">
      <button
        onClick={saveWorld}
        className="inline-flex py-1 px-4 justify-center gap-x-2 rounded-lg text-sm leading-6 font-semibold focus-visible:ring-2 focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-gray-500 bg-gray-900 text-white hover:bg-gray-800"
      >
        Save
      </button>
      <button
        onClick={resetWorld}
        className="inline-flex py-1 px-4 justify-center gap-x-2 rounded-lg text-sm leading-6 font-semibold focus-visible:ring-2 focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-gray-500 bg-gray-900 text-white hover:bg-gray-800"
      >
        Reset
      </button>
    </div>
  )
}
