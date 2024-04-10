import React from 'react'
import { useState } from 'react'
import indianCities from '../../cities/indianCities'
import "./publishRide.css"
import { Link } from 'react-router-dom'

function PickUp() {

    const [filteredCities, setFilteredCities] = useState([])

    const filterCities = (e) => {
        const searchValue = e.target.value
        const filteredVal = indianCities.filter((city) => {
            return city.toLowerCase().startsWith(searchValue.toLowerCase())
        })
        setFilteredCities(filteredVal);
    }

    // const navigate = useNavigate();
    return (
        <div className='h-screen w-screen flex-col'>
            <h1 className='h-[10%]'>FuFuCar</h1>
            <div className='h-[90%] flex items-start  justify-center'>
                <div className='w-screen mt-20 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl mb-6 text-sky-800 font-bold'>Pick-Up</h2>
                    <div className='flex-row h-5'>
                        <i className="fa-solid fa-magnifying-glass text-slate-900"></i>
                        <input type="search" className='bg-slate-100 outline-none px-1 py-1 w-[37vw] rounded-r-md' onChange={filterCities}/>
                    </div>
                    <ul className='overflow-auto h-64 mt-6 custom-scrollbar'>
                        {filteredCities.map((city) => (
                            <Link to={"/drop"} className='w-[40vw]  border-b-[1px] border-slate-400 py-2'>
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

export default PickUp