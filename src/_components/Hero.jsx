

export default function Hero() {
  return (
  <section className="w-full  flex flex-col gap-0 md:flex-row   bg-amber-50 md:gap-0 justify-center items-center md:h-[20rem] mx-auto px-5 mt-1 " >
      <div className="md:flex-1 w-full py-10  h-full mx-auto px-10 flex justify-center">
        <img src="vite.svg" alt="hero" height={200} width={200}/>
      </div>
      <div className="md:flex-1 w-full  h-full  flex flex-col gap-10 items-center justify-center px-10" >
        <h1 className="font-bold  md:text-5xl text-6xl "> Discover Yourself</h1>
       <span className="text-lg lg:text-2xl" > Unlock your full potential</span>
      </div>
       </section>
  )
}
