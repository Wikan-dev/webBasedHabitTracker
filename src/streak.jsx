import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import fire from './assets/fire.png'
import { useState , useRef } from "react";

import sourceData from './data/sourceData.json';

const Streak = ({ days, }) => {
    const [isON, setIsOn] = useState(false);

    const skippedObj = sourceData.find((item) => item.skippedHabbit);
    const skippedHabit = skippedObj?.skippedHabbit || [];
    const visibleHabits = isON ? skippedHabit : skippedHabit.slice(0, 3);

    const myHabitObj = sourceData.find((item) => item.myHabit);
    const myHabit = myHabitObj?.myHabit || [];
    const visibleMyHabit = myHabit.slice(0, 4);
    
    const handleToggle = () => {
        setIsOn((prev) => !prev);
    };

    return (
        <div className="bg-linear-to-b from-[#BDFAC1] to-[#8BC88E] h-[100dvh] px-10">
            <div className="flex flex-row  relative">
                <div className="text-[80px] font-bold ">
                    <h1 className="flex flex-col text-transparent bg-clip-text bg-gradient-to-b from-[#93DA97] to-[#5E936C]">3 DAYS <span>STREAK</span></h1>
                </div>
            <img src={fire} alt="image" className="flex absolute right-0" />
            </div>
            <div className="w-full h-[2px] bg-[#3E5F44] mt-10"></div>
            
            <div className="flex flex-row"> 
                <div className="w-100">
                    <Doughnut
                        data={{
                            labels: sourceData.map((data) => data.label),
                            datasets: [
                                {
                                    label: "days",
                                    data: sourceData.map((data) => data.value),
                                    backgroundColor: sourceData.map((data) => data.bakcground),
                                    borderColor: "rgba(0, 0, 0, 0)"
                                }
                            ]
                        }}
                    ></Doughnut>
                </div>
                <div className="ml-5"> 
                    <div className="bg-[#80B28D]/33 text-white mt-10 h-[300px] w-100 p-5 rounded-[30px] relative transition-all duration-2s flex flex-col gap-3" style={{height: !isON ? '300px' : '400px'}}>
                    <h1 className="font-bold text-[40px] mb-2">skipped</h1>
                        <div className="flex flex-col gap-2">
                            {visibleHabits.map((habit, i) => (
                                <div key={i}>
                                    <input type="checkbox" className="mr-2" />
                                    <label>{habit}</label>
                                </div>
                            ))}
                        </div>

                        {skippedHabit.length > 3 && (
                            <button className="w-full absolute bottom-10 left-0" onClick={handleToggle}>{isON ? "show less" : "show more"}</button>
                        )}
                    
                    </div>
                <button className="w-full bg-[#80B28D]/33 mt-7 h-12 rounded-xl font-bold text-white" style={{display: isON ? "none" : "block"}}>Add new habit</button>
                </div>
                <div className="w-full">
                    <div className="bg-[#80B28D]/33 mt-10 ml-5 h-95 font-bold text-white p-5 text-[30px] flex flex-col gap-10 rounded-xl">
                        {visibleMyHabit.map((myHabit, i) => (
                            <div key={i}>
                                <div className="flex flex-row">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full mr-5"></div>
                                    <label>{myHabit}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Streak