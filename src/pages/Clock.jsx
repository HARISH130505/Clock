import { useState } from 'react'
import Navbar from '../components/Navbar'
import AnalogClock from "analog-clock-react"

const Clock = () => {
    // Digital Clock Setup
    let time = new Date().toLocaleTimeString('en-US', { hour12: false });

    const [cTime, setCTime] = useState(time)
    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString('en-US', { hour12: false });
        setCTime(time)
    }
    setInterval(UpdateTime)

    // Analog Clock Setup
    let options = {
        width: "450px",
        border: false,
        baseColor: "#dbe9f4",
        centerColor: "",
        handColors: {
            second: "#e7190c",
            minute: "#50e750",
            hour: "#0d35e8"
        },
    }
    return (
        <div className='bg-gray-900 flex flex-col max-w-screen min-h-screen overflow-hidden'>
            <Navbar name="Clock" />
            <div className="flex w-full justify-center items-center flex-col flex-1">
                <h1 className='text-[#FFFFFF] text-5xl pt-6 '>Digilog</h1>
                {/* Rendering Analog Clock */}
                <div className='flex items-center justify-center flex-col-reverse'>
                    <AnalogClock {...options}/>
                    {/* Rendering Digital Clock */}
                    <div className='relative z-10 top-60'>
                        <p className='relative  text-[#263681] text-8xl'>{cTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock
