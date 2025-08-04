import Lg from "./assets/login-bg.png"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="bg-[#7DB888] h-full absolute w-full flex justify-center items-center">   
            <img src={Lg} alt="bg" />
            <div className="bg-white/20 w-[410px] h-150 absolute drop-shadow-xl/80 backdrop-blur-[5px] rounded-2xl px-5">
                <h1 className="text-white font-bold text-[96px]">Login</h1>
                <div className="flex flex-col gap-10">
                    <input type="text" placeholder="Email / Username" className="h-10 border-b-2 border-[#3E5F44] text-[#3E5F44] text-[20px] pl-2 drop-shadow-xl/80 focus:outline-none" />
                    <input type="text" placeholder="Password" className="h-10 border-b-2 border-[#3E5F44] text-[#3E5F44] text-[20px] pl-2 drop-shadow-xl/80 focus:outline-none"/>
                </div>
                <div className="flex mt-5 gap-5">
                    <button className="bg-[#93DA97] h-10 w-30 rounded-xl hover:scale-110 transition-all duration-1s">Enter</button>
                    <button className="bg-[#93DA97] h-10 w-30 rounded-xl hover:scale-110 transition-all duration-1s">Sign-Up</button>
                </div>
                <Link to="/"><button className="bg-[#93DA97] h-10 w-20 rounded-xl hover:scale-110 transition-all duration-1s absolute bottom-10">Go back</button></Link>
            </div>
        </div>
    )
}

export default Login