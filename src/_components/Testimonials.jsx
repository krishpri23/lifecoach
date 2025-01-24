

export default function Testimonials() {
  let clientTestimonials = [
    {
      id: 1,
      name: "KP",
      response: "Working with SP has been a life-changing experience. Their guidance and support helped me gain clarity, set meaningful goals, and overcome challenges I never thought I could handle. Through our sessions, I learned to prioritize my well-being and make decisions that align with my values. Her compassionate approach and actionable advice have given me the tools and confidence to pursue a more fulfilling life. I couldnt recommend their coaching enough!",
       job:"Freelancer"
    },
     {
      id: 2,
      name: "KP",
       response: "Working with SP has been a life-changing experience. Their guidance and support helped me gain clarity, set meaningful goals, and overcome challenges I never thought I could handle. Through our sessions, I learned to prioritize my well-being and make decisions that align with my values. Her compassionate approach and actionable advice have given me the tools and confidence to pursue a more fulfilling life. I couldnt recommend their coaching enough!",
       job:"Freelancer"
    },
      {
      id: 3,
      name: "KP",
        response: "Working with SP has been a life-changing experience. Their guidance and support helped me gain clarity, set meaningful goals, and overcome challenges I never thought I could handle. Through our sessions, I learned to prioritize my well-being and make decisions that align with my values. Her compassionate approach and actionable advice have given me the tools and confidence to pursue a more fulfilling life. I couldnt recommend their coaching enough!",
      job:"Freelancer"
    },
       {
      id: 4,
      name: "KP",
         response: "Working with SP has been a life-changing experience. Their guidance and support helped me gain clarity, set meaningful goals, and overcome challenges I never thought I could handle. Through our sessions, I learned to prioritize my well-being and make decisions that align with my values. Her compassionate approach and actionable advice have given me the tools and confidence to pursue a more fulfilling life. I couldnt recommend their coaching enough!",
       job:"Freelancer"
    },
       
    
  ]
  return (
    <div className="w-full px-5  bg-amber-50">
      <h1 className="tracking-tight font-bold text-xl text-center mt-10 "> What my clients have to say </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">
        {
          clientTestimonials.map((item, i) =>
            <div key={i} className=" h-full  rounded-xl text-md p-5 shadow-md  mt-5 flex flex-col bg-amber-100">
              <span className="italic">{item.response}</span>
              <span className="font-bold text-lg mt-6"> {item.name}</span>
              <span className="tracking-tight"> {item.job} </span>

            </div>)}
 
    
      </div>
     </div>
  )
}
