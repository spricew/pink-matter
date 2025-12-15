import MiniCard from "./components/Card/MiniCard"

function App() {

  return (
    <>
    <div className="absolute inset-0 -z-5 w-full h-full">
      <img src="/sss.jpg" alt="Background"
      className="object-cover w-full " />
    </div>
    <div className="flex gap-2 p-24">
      <MiniCard text="Hola, soy una tarjeasdasd a ad asd  ads ad  s as seda deas deas dsa sdasdasdta!" />
      <MiniCard text="Hola, soy una tarjeta!" brightness={10} darkness={50} />
      <MiniCard text="Hola, soy una tarjeta!" />
      </div>
    </>
  )
}

export default App
