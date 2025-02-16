import GridLayout from "./components/GridLayout";
import Heading from "./components/Heading";
import SetLayout from "./components/SetLayout";

function App() {
  return (
    <main className="text-center p-3 lg:p-0 mt-20">
      <Heading />
      <GridLayout />
      <SetLayout />
    </main>
  );
}

export default App;
