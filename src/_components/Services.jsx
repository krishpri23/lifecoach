


export default function Services() {
  return (
    <section className="w-full bg-teal-100">
     
      <div className="px-10 py-5">
        <h1 className="tracking-tight font-bold text-3xl">My Services</h1>
      <span className="font-light italic tracking-wide"> Why join?</span>
        <p className="mt-6">
       <li>  Feeling Stressed or Overwhelmed? Learn techniques to manage stress and build emotional resilience.</li>
       <li>Uncertain About Your Future? Clarify your goals and create a roadmap for success.</li>
       <li>Lacking Motivation? Get inspired and stay motivated with creative visualization and goal-setting strategies. </li>
       <li>Struggling with Self-Confidence? Boost your self-esteem and believe in your potential. </li>
        <li>Want to Meet New Friends? Join a supportive community of like-minded teens who share your aspirations.</li>
        <li>
Need Direction? Discover your strengths and passions to guide your future choices.</li>
    
        </p>
      </div>
      

      <div className="flex justify-center items-stretch">
  <div className="flex-1 bg-slate-100 p-5">
       <div className="border-2 border-slate-300 rounded-md p-5 hover:border-2 hover:border-teal-400 flex flex-col justify-center items-start h-full ">
          <h1 className="font-bold text-2xl tracking-wider " > Individual coaching</h1>
          <span className="text-sm mb-6">Personalized Guidance</span>
        <p className="">
          Individual coaching sessions provide personalized guidance and support to help clients navigate challenges, set meaningful goals, and achieve personal growth. I work collaboratively with individuals to develop strategies for success and empower them to lead fulfilling lives.
      </p>
        </div>
     </div>

      <div className="flex-1 bg-slate-100   p-5"> 
          <div className="border-2 border-slate-300 rounded-md p-5 hover:border-2 hover:border-teal-400 flex flex-col justify-center items-start  h-full">
          <h1 className="font-bold text-2xl tracking-wider "> Group workshops</h1>
          <span className="text-sm mb-6">Community Learning</span>
        <p>
        Join group workshops to engage in community learning and personalized development. These interactive sessions foster collaboration, growth, and shared experiences, creating a supportive environment for self-discovery and skill enhancement. 
     </p>
        </div>
        </div>
      </div>
       

    </section>
  )
}
