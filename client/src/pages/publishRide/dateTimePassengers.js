import React, { useState, useContext, useEffect } from 'react';
import "./publishRide.css";
import RideContext from '../../Contexts/RideContext.js';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'


function DateTimePassengers() {

    const { ride, setRide } = useContext(RideContext);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('');
    const navigate = useNavigate();

    const handleDropChange = () => {
        setRide({ ...ride, arrival: date, time: time, passengers: passengers });
    };
    useEffect(() => {
        handleDropChange();
    }, [date, time, passengers]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { source, destination, arrival, time, passengers } = ride;
            console.log(source);
            console.log(destination);
            console.log(arrival);
            console.log(time);
            console.log(passengers);
            const res = await axios.post("http://localhost:8080/api/v1/publishRide/publish", { source, destination, arrival, time, passengers });
            if (res.data.success) {
                console.log("Ride successfully registered");
                toast.success("Ride successfully Registerred");
                navigate('/');
            } else {
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handlePassengersChange = (e) => {
        setPassengers(e.target.value);
    };

    return (
        <div className='h-screen w-screen flex-col'>
            <h1 className='h-[10%] mt-10'>FuFuCar</h1>
            <div className='h-[90%] flex items-start  justify-center'>
                <div className='w-screen mt-20 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl mb-6 text-sky-800 font-bold'>Other Info.</h2>
                    <div className='flex flex-col gap-4 mt-6'>
                        <input type='date' className='mb-4 w-[250px] border-[1px] p-2 border-slate-400 rounded' value={date} onChange={handleDateChange} />
                        <input type="string" className='mb-4 border-[1px] p-2 border-slate-400 rounded' value={time} onChange={handleTimeChange} />
                        <input type="number" className='border-[1px] p-2 border-slate-400 rounded' placeholder='No.of Passengers' min={1} value={passengers} onChange={handlePassengersChange} />
                    </div>
                    <div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 mt-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>Publish Your Ride</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateTimePassengers;
