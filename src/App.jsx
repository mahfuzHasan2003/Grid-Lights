import "./App.css";
import GridLayout from "./components/GridLayout";

function App() {
  return (
    <main className="text-center p-3 lg:p-0 mt-20">
      <div className="mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 animate-gradient text-transparent bg-clip-text">
            Grid Lights
          </span>
        </h1>
        <p className="mt-5">
          Click to fill up every cell, and it&apos;ll return to the initial
          stage after all are filled.
        </p>
      </div>
      <GridLayout />
    </main>
  );
}

export default App;
