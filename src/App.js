import './App.css';
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import React from 'react';
import Weather from './Pages/Weather';
import Flight from './Pages/Flight';
import CurrencyConverter from './Pages/CurrencyConverter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="Home">
          <Routes>
            <Route path="/Content" element={<Content />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Flight" element={<Flight />} />
            <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
