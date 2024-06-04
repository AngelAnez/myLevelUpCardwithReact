import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <main
      className="bg-gradient-to-b from-blue-night to-slate-900
     min-h-screen text-white flex flex-col justify-center"
    >
      <div className="snowflake min-h-screen animate-falling w-full flex flex-col">
        <div className="min-h-screen flex flex-col w-full bg-gradient-to-b from-[rgba(13,33,112,0.3)] to-[rgba(2,6,20,0.3)] justify-center">
          <Card />
        </div>
      </div>
    </main>
  );
}

export default App;
