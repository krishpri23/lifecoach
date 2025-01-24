import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex gap-5 justify-end items-center px-6 py-3 bg-stone-300 ">
  
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact </NavLink>
      
  </nav>
  )
}
