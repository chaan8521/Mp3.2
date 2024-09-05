import React from 'react';

const Content = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/globe.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to PlaNado!</h1>
        <p className="text-lg">
        Plan your travel with ease by accessing weather updates, checking flight details, and using the built-in currency converter. <br></br> We provide everything you need to make your trip seamless and stress-free.
        </p>
      </div>
    </div>
  );
};

export default Content;