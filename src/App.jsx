import bg from "./assets/bg.png"
import visual from "./assets/visual.png"
import Login from "./login"
import Streak from "./streak"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom"

const Card = ({ title, deskripsi }) => {
  return (
    <div className="w-[283px] h-[456px] bg-red-500 bg-linear-to-b from-[#93DA97] to-[#5E936C] drop-shadow-xl/50 px-4">
      <h1 className="text-[96px] font-bold w-10 text-base/25 text-white drop-shadow-md/20">{title}</h1>
      <h1 className="text-white">{deskripsi}</h1>
    </div>
  )
}

const Home = () => {
  return (
    <div className="bg-[#81C58D] h-[100%] relative ">
      <div className="bg-linear-to-b from-[#3E5F44] to-[#81C58D] h-[100%] relative top-0 z-30"></div>
      <img src={bg} alt="image" className="w-full relative z-0 object-bottom size-100 object-cover" />
      <div className="relative z-10 text-center justify-center -top-40 bg-white/40 drop-shadow-xl/80 backdrop-blur-[5px] pb-10 h-90 w-140 rounded-[40px] mx-auto">
        <h1 className="font-bold text-[96px] text-[#E8FFD7] drop-shadow-md/50">Habit.io</h1>
        <h2 className="text-[30px] text-[#E8FFD7] drop-shadow-md/50 w-80 mx-auto">Best web-based habit tracker at all time</h2>
       <Link to="/login"><button className="bg-[#93DA97] w-90 h-30 relative top-5 rounded-[20px] font-bold text-[40px] text-[#E8FFD7] hover:scale-110 transition-all duration-1s">Join Now</button></Link>
      </div>
      <div className=" w-full h-50 top-50 bg-linear-to-b from-white/0 to-[#81C58D] absolute"></div>
      <div className="w-full h-full bg-[#81C58D] flex gap-[32px] relative -top-10 justify-between px-15">
        <Card title="WH Y?" deskripsi="Tracking your habits helps you stay aware of your actions, build consistency, and stay motivated through small wins. It gives you a clear picture of your routines, reveals patterns ..." />
        <Card title="WH EN?" deskripsi="Starting to track your habits as soon as possible gives you a head start on building consistency and self-awareness, which are key to real, lasting change. The earlier you begin ..." />
        <Card title="HO W?" deskripsi="Take control of your day, one habit at a time. Our habit tracker helps you stay consistent, motivated, and in sync with your goals — no pressure, just progress. Whether ..." />
      </div>
      <div className="mx-15 mb-10">
        <h1 className="text-[100px] text-white font-bold text-base/25 drop-shadow-md/40">Clean and Easy to use UI</h1>
        <h4 className="text-white text-[20px] mr-10 mt-10">No clutter, no confusion — just a clean, intuitive interface that makes tracking habits feel effortless. Our minimalist design keeps you focused on what matters most: your progress. Everything is easy to use, straight to the point, and designed to help you build better habits without the overwhelm. Simple by design, powerful in impact.</h4>
        <img src={visual} alt="visual" className="mt-10 w-full py-20" />
      </div>
      <div className="mx-15">
        <h1 className="text-[100px] text-white font-bold text-base/25 drop-shadow-md/40">Level up the fun with challenge</h1>
        <h4 className="text-white text-[20px] mr-10 mt-10">No clutter, no confusion — just a clean, intuitive interface that makes tracking habits feel effortless. Our minimalist design keeps you focused on what matters most: your progress. Everything is easy to use, straight to the point, and designed to help you build better habits without the overwhelm. Simple by design, powerful in impact.</h4>
        <img src={visual} alt="visual" className="mt-10" />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/streak" element={<Streak />} /> */}
      </Routes> 
    </BrowserRouter>
  )
}
export default App