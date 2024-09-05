import React, { useState } from 'react';
import FlightData from './FlightData';
import useFetch from '../useFetch';

const Flight = () => {
  const [city, setCity] = useState('');
  const [url, setUrl] = useState('');

  const { data, loading } = useFetch(url);

  const handleSearch = () => {
    if (city === "") {
      alert("Please enter a city code!!!");
      return;
    }
    const apiKey = process.env.REACT_APP_FLIGHT_API_KEY;;
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=${city}`;
    setUrl(apiUrl);
  };

  console.log("API response:", data);

  return (
    <div className="pt-24 flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city code (e.g., LAX)"
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-sm"
      />
      <button 
        onClick={handleSearch} 
        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get Flights
      </button>

      {loading && <p className="text-gray-700">Loading...</p>}

      <div className="flights-list space-y-4 max-w-screen-lg overflow-y-auto">
        {data && data.data && data.data.length > 0 ? (
          data.data.map((flight) => (
            <FlightData key={flight.flight?.iata} flight={flight} />
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
};

export default Flight;
