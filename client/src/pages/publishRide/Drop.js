import React from 'react'
import { useState } from 'react'
import indianCities from '../../cities/indianCities'
import "./publishRide.css"
import { Link } from 'react-router-dom'

function DropOff() {

    const [filteredCities, setFilteredCities] = useState([])

    const filterCities = (e) => {
        const searchValue = e.target.value
        const filteredVal = indianCities.filter((city) => {
            return city.toLowerCase().startsWith(searchValue.toLowerCase())
        })
        setFilteredCities(filteredVal);
    }

    return (
        <div className='h-screen w-screen flex-col'>
            <h1 className='h-[10%]'>FuFuCar</h1>
            <div className='h-[90%] flex items-start  justify-center'>
                <div className='w-screen mt-20 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl mb-6 text-sky-800 font-bold'>Drop-Off</h2>
                    <div className='flex'>
                        <div className='bg-slate-200 h-10 rounded-l-md z-10 w-[3vw] flex items-center justify-center'><i className="fa-solid fa-magnifying-glass text-slate-500"></i></div>
                        <input type="search" className='bg-slate-200 h-8 outline-none px-1 py-5 w-[37vw] rounded-r-md' onChange={filterCities}/>
                    </div>
                    <ul className='overflow-auto h-64 mt-6 custom-scrollbar'>
                        {filteredCities.map((city) => (
                            <Link to="#" className='w-[40vw]  border-b-[1px] border-slate-400 py-2'>
                                <li className='flex w-[40vw] px-3 hover:bg-slate-100 py-2 rounded-xl font-semibold text-sky-800 cursor-pointer items-center' key={city}>
                                {/* <div className='flex items-center'> */}
                                    <i className="fa-regular fa-clock mr-[1.8vw] text-slate-500"></i>
                                    <div className='mr-[20vw]'>
                                        {city} 
                                    </div>
                                {/* </div> */}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
}

export default DropOff