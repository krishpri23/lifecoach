

export default function Hero() {
  return (
  <section className="w-full  flex flex-col gap-0 md:flex-row   bg-amber-50 md:gap-0 justify-center items-center md:h-[20rem] mx-auto px-5 mt-1 " >
      <div className="hidden md:flex-1 w-full py-10  h-full md:flex justify-center mx-auto px-10">
        <img src="vite.svg" alt="hero" height={200} width={200}/>
      </div>

      <div className="h-[20rem] md:flex-1 w-full  md:h-full  flex flex-col gap-10 items-center justify-center px-10" >
        <h1 className="font-bold   text-5xl text-center "> Discover Yourself</h1>
       <span className="text-lg lg:text-2xl" > Unlock your full potential</span>
      </div>
       </section>
  )
}
