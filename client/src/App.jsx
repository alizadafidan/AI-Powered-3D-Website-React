import React from "react";
import CanvasModel from "./canvas/index";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
};

export default App;
