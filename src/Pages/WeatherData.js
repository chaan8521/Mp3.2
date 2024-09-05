import React from 'react';

function WeatherData({ data }) {
  const isRainy = data.weather[0].main.toLowerCase().includes("rain");

  return (
    <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-6xl font-bold">{data.main.temp}°C</span>
          
          <span className="font-semibold mt-1 text-gray-500">Weather Description: {data.weather[0].description}</span>
          <span className="font-semibold mt-1 text-gray-500">Humidity: {data.main.humidity} %</span>
          <span className="font-semibold mt-1 text-gray-500">{data.name}, {data.sys.country}</span>
        </div>
        <svg className={`h-24 w-24 fill-current ${isRainy ? 'text-blue-400' : 'text-yellow-400'}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          {isRainy ? (
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 8.14 4 5 7.14 5 11h14c0-1.1-.22-2.16-.65-3.15zM6 19c-.39 0-.78-.15-1.07-.44-.29-.29-.44-.68-.44-1.07s.15-.78.44-1.07L11 11.93V9c0-.55.45-1 1-1s1 .45 1 1v2.93l5.07 5.56c.29.29.44.68.44 1.07s-.15.78-.44 1.07c-.29.29-.68.44-1.07.44H6z" />
          ) : (
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
          )}
        </svg>
      </div>
    </div>
  );
}

export default WeatherData;
