import { useState } from 'react';
import one from "./assets/one.svg";
import two from "./assets/two.svg";
import three from "./assets/three.svg";
import four from "./assets/four.svg";
import five from "./assets/five.svg";
import six from "./assets/six.svg";
import roll from "./assets/roll.svg";

function App() {
  const [number, setNumber] = useState(1);
  const [rolling, setRolling] = useState(false);

  const handleRoll = () => {
    setNumber(Math.floor(Math.random() * 6) + 1);
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 2000);
  };

  return (
    <div className="w-screen h-full p-24 bg-gray-400 flex justify-center items-center gap-5 flex-col">
      <h1 className="text-xl font-bold">Dice Roller</h1>

      <div className="w-24 h-24 bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
        {rolling ? (
          <img src={roll} alt="Rolling" className="animate-spin w-10 h-10" />
        ) : (
          <img
            src={
              number === 1 ? one :
              number === 2 ? two :
              number === 3 ? three :
              number === 4 ? four :
              number === 5 ? five : six
            }
            alt={`Dice ${number}`}
            className="w-14 h-14"
          />
        )}
      </div>

      <button
        onClick={handleRoll}
        disabled={rolling}
        className={`w-fit px-3 py-2 rounded-md text-base font-medium transition ${
          rolling
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {rolling ? "Rolling..." : "Roll the Dice"}
      </button>
    </div>
  );
}

export default App;
