import { FaInstagramSquare,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <section className="w-full px-10 mb-5 " id="contact">
      <div className="flex justify-between items-center">

     
        <div>
     
           <h1 className="font-bold text-xl mt-10">Get in touch</h1>
        <div className="flex gap-5 justify-start items-center ">
     
          <FaInstagramSquare />
          
<span> @sp.lifecoach </span>
      </div>
       <div className="flex gap-5 justify-start items-center ">
<FaPhoneAlt />
<span>  9259229980</span>
      </div>
       <div className="flex gap-5 justify-start items-center ">
<MdEmail />
<span> saishree99@gmail.com </span>
      </div>
      </div>
      <div className="flex flex-col items-center text-lg ">
        <span className="font-bold"> Mind Valley Certified Coach</span>
        <span className="font-normal"> Shanmuga Priya (SP)</span>
      </div>
       </div>
    </section>
  )
}
