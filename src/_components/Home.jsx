import About from "./About";
import Hero from "./Hero";
import Services from "./Services";


export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col gap-0 justify-center items-center mx-auto px-5">
      <Hero />
      <About />
      <Services/>
    </div>
  )
}
