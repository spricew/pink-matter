import { MiniCard } from "./components/Card/MiniCard";
import React from "./components/ReactIcon";

function App() {

  return (
    <>
      <div className="h-screen w-full">
        <div className="absolute inset-0 -z-5">
          <img src="/bgDemo.jpg" alt="Background"
            className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-wrap gap-2 p-24 h-full text-wrap">
          <MiniCard text="Hello world!" 
          Icon={React}/>
        </div>
      </div>
    </>
  )
}

export default App
