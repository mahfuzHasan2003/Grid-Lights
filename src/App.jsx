import { useState } from "react";
import GridLayout from "./components/GridLayout";
import Heading from "./components/Heading";
import SetLayout from "./components/SetLayout";

function App() {
  const [layoutConfig, setLayoutConfig] = useState([
    [true, true, true],
    [true, false, true],
    [true, true, true],
  ]);
  return (
    <main className="text-center p-3 lg:p-0 mt-20">
      <Heading />
      <GridLayout layoutConfig={layoutConfig} />
      <SetLayout
        setLayoutConfig={setLayoutConfig}
        layoutConfig={layoutConfig}
      />
    </main>
  );
}

export default App;
