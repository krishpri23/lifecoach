import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";


export default function Home() {
  return (
    <div className="max-w-7xl font-lora flex flex-col gap-0 justify-center items-center mx-auto  bg-stone-50 ">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}
