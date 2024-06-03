import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <main
      className="bg-gradient-to-b from-blue-night to-slate-900
     min-h-screen h-full text-white flex flex-col justify-center"
    >
      <div className="bg-snowflake bg-repeat bg-[size:5%] opacity-40 h-full min-h-screen animate-falling">
      </div>
      <Card />
    </main>
  );
}

export default App;
