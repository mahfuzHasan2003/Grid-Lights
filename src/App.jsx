import "./App.css";
import GridLayout from "./components/GridLayout";

function App() {
  return (
    <main className="text-center p-3 lg:p-0 mt-20">
      <div className="mb-5">
        <h1>Grid Lights</h1>
        <p>Click to fill up every cell</p>
      </div>
      <GridLayout />
    </main>
  );
}

export default App;
