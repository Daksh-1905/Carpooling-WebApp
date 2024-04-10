import React, { useEffect } from 'react'
import { useState } from 'react'
import "./publishRide.css"
import { Link } from 'react-router-dom'

function DateTimePassengers() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('');

    return (
        <div className='h-screen w-screen flex-col'>
            <h1 className='h-[10%]'>FuFuCar</h1>
            <div className='h-[90%] flex items-start  justify-center'>
                <div className='w-screen mt-20 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl mb-6 text-sky-800 font-bold'>Other Info.</h2>
                    <div className='flex flex-col gap-4 mt-6'>
                        <input type='date' className='mb-4 w-[250px] border-[1px] p-2 border-slate-400 rounded' value={date} onChange={(e)=>setDate(e.target.value)}/>
                        <input type="time" className='mb-4 border-[1px] p-2 border-slate-400 rounded' value={time} onChange={(e=>setTime(e.target.value))}/>
                        <input type="Number" className='border-[1px] p-2 border-slate-400 rounded' placeholder='No.of Passengers' min={1} value={passengers} onChange={(e=>setPassengers(e.target.value))}/>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default DateTimePassengers