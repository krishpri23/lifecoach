import { PopupButton } from "react-calendly";


export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex gap-10 justify-center items-center px-6 py-3  text-lg font-semibold   bg-secondary font-lora text-brown ">
      <div className="mr-auto">
        <img className="h-10 w-20 object-cover" src="logo.png" width={40} height={40} />
      </div>

      <div className="hidden md:flex gap-5 justify-center items-center  mr-auto">

       <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
      <a href="#contact">Contact </a>
      </div>



      <PopupButton url="https://calendly.com/priya-amarnath23/30min"  className="text-md text-primary px-4 py-2 bg-brown rounded-full"  rootElement={document.getElementById("root")}
       text="Book now" />
       
      
  </nav>
  )
}
