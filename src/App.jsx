import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/Coreconcepts";
import Examples from "./components/Examples";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;