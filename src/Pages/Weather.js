import React, { useState } from 'react';
import useFetch from '../useFetch';
import WeatherData from '../Pages/WeatherData';

function Weather() {
  const [cityName, setCityName] = useState("");
  const [url, setUrl] = useState("");

  const { data: weatherData, loading } = useFetch(url);

  const getWeatherData = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;;
    if (cityName === "") {
      alert("Please enter a city name!!!");
      return;
    }

    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    setUrl(newUrl);
  };

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <input
        type="text"
        value={cityName}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={getWeatherData} 
        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get Weather
      </button>

      {loading && <p className="text-gray-700">Loading...</p>}

      {weatherData && <WeatherData data={weatherData} />}
    </div>
  );
}

export default Weather;
