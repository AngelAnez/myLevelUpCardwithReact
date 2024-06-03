import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <main
      className="bg-gradient-to-b from-blue-night to-slate-900
     min-h-screen h-full text-white flex flex-col justify-center"
    >
      <div className="snowflake opacity-70 h-full min-h-screen animate-falling absolute w-full"></div>
      <Card />
    </main>
  );
}

export default App;
