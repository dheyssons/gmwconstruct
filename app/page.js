export default function Home() {
  return (
    <main className="relative">
      <div className="absolute h-full right-0 m-20 ">
        <h1 className="h1 text-[#101010]">GMW Construct</h1>
        <p className="py-4">Construindo seu sonho com profissionalismo, amor e confiança.</p>
        <button className="btn_light">CONTACT US</button>
      </div>

      <img className="bg-cover w-full sticky -z-10" src="/home.png"></img>
    </main>
  )
}
