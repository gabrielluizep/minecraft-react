import { Game } from './components';

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(96px,_1fr)_2fr_minmax(96px,_1fr)] grid-rows-[64px_1fr] gap-2">
      <div className="lg:col-span-3 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-gray-500">
        header
      </div>

      <div className="p-4">This project was developed</div>

      <Game className="lg:col-start-2 lg:row-start-2 w-full xl:h-[480px] 2xl:h-[800px]" />

      <div className="p-4 row-start-3 lg:row-start-2 lg:col-start-3">
        How to play:
        <br />
        <kbd>W</kbd>
        <kbd>A</kbd>
        <kbd>S</kbd>
        <kbd>D</kbd>
      </div>
    </div>
  );
}

export default App;
