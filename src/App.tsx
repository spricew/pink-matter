import { MiniCard } from "./components/Card/MiniCard";
import { PrimaryCard } from "./components/Card/PrimaryCard";
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
          <MiniCard 
            text="Hello world!"
            Icon={React} />

          <PrimaryCard
            title="Hola mundo"
            text="Esta Esta Esta Esta Esta Esta Esta Esta Esta Esta Esta Esta Esta asd asd ads asd asd asd ads saas d asd ad asd ad asd asdasd asd asd sd asd as dasd asd asd as dasd ads saas d asd ad asd ad asd asdasd asd asd sd asd as dasd asd asd as dasd ads saas d asd ad asd ad asd asdasd asd asd sd asd as dasd asd asd as dasd ads saas d asd ad asd ad asd asdasd asd asd sd asd as dasd asd asd as dasd ads saas d asd ad asd ad asd asdasd asd asd sd asd as dasd asd asd as dasd ads saas d asd ad asd ad asd asdasd asd asd sd asd as dasd asd asd as d es una tarjeta primaria de ejemplo con un texto un poco más largo para demostrar el comportamiento de la tarjeta cuando el contenido es extenso."
            Icon={React} />

        </div>
      </div>
    </>
  )
}

export default App
