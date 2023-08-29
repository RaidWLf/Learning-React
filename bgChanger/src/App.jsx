import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed bottom-12 inset-x-0 flex flex-wrap px-2 justify-center duration-500">
        <div className="flex flex-wrap bg-white gap-3 py-2 px-4 text-white font-semibold justify-center rounded-xl">
          <button
            className="px-5 py-2 rounded-2xl "
            style={{ backgroundColor: color }}
            onClick={() => setColor("red")}
          >
            Default
          </button>
          <button
            className="px-5 py-2 rounded-2xl "
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="px-5 py-2 rounded-2xl "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-5 py-2 rounded-2xl "
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
