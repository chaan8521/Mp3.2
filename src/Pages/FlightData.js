function FlightData({ flight }) {
  if (!flight || !flight.flight) {
    console.log("Flight data is undefined or does not contain expected properties:", flight);
    return <p>No flight data available.</p>; // or some fallback UI
  }

  return (
    <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Flight: {flight.flight.iata}</span>
          <span className="font-semibold mt-1 text-gray-500">From: {flight.departure?.iata} ({flight.departure?.airport})</span>
          <span className="font-semibold mt-1 text-gray-500">To: {flight.arrival?.iata} ({flight.arrival?.airport})</span>
          <span className="font-semibold mt-1 text-gray-500">Departure Time: {flight.departure?.scheduled}</span>
          <span className="font-semibold mt-1 text-gray-500">Arrival Time: {flight.arrival?.scheduled}</span>
          <span className={`font-semibold mt-1 ${flight.flight_status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
            Status: {flight.flight_status}
          </span>
        </div>
        <svg className="h-24 w-24 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M10.18 9" />
          <path d="M13.82 11" />
          {/* Add a simple icon or an airplane icon to match your style */}
        </svg>
      </div>
    </div>
  );
}
export default FlightData;