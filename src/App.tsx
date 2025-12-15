import { MiniCard } from "./components/Card/MiniCard";

function App() {

  return (
    <>
      <div className="h-screen w-full">
        <div className="absolute inset-0 -z-5">
          <img src="/bgDemo.jpg" alt="Background"
            className="object-cover w-full h-full" />
        </div>
        <div className="flex gap-2 p-24">
          <MiniCard text="Holaasd, soy una tarjeasdasd a ad asd  ads ad  s as seda deas deas dsa sdasdasdta!" />
        </div>
      </div>
    </>
  )
}

export default App
