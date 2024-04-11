import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RideCards() {
  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/publishRide/get_rides")
      .then(response => {
        setRides(response.data);
        setFilteredRides(response.data);
      })
      .catch(error => {
        console.error('Error fetching rides:', error);
      });
  }, []);

  useEffect(() => {
    setFilteredRides(rides.filter(ride => ride.source.toLowerCase().includes(source.toLowerCase()) && ride.destination.toLowerCase().includes(destination.toLowerCase())));
  }, [source, destination]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col">
        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
          <div className="p-8 text-3xl font-bold text-center border-b-4">Filter</div>
          <ul className="w-full text-center text-sm">
            <li className="border-b py-4">
              <input className="outline-none" type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
            </li>
            <li className="border-b py-4">
              <input className="outline-none" type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
            </li>
          </ul>
        </div>
      </div>
      {filteredRides.map(ride => (
        <div key={ride._id} className="w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col">
          <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
            <div className="p-8 text-3xl font-bold text-center border-b-4">{ride.source} to {ride.destination}</div>
            <ul className="w-full text-center text-sm">
              <li className="border-b py-4">Arrival: {new Date(ride.arrival).toLocaleDateString()}</li>
              <li className="border-b py-4">Time: {ride.time}</li>
              <li className="border-b py-4">Passengers: {ride.passengers}</li>
            </ul>
            <div className="p-8">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded">
                Book Ride
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RideCards;