import React, { useState, useEffect } from 'react';
import useFetch from '../useFetch'; 
import CurrencyInput from './CurrencyInput';
import CurrencyResult from './CurrencyResult';

const CurrencyConverter = () => {
  const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;;
  const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

  const { data, loading, error } = useFetch(apiUrl);
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (data && data.rates) {
      setCurrencies(data.rates);

      if (Object.keys(data.rates).length > 0) {
        setFromCurrency(Object.keys(data.rates)[0]);
        setToCurrency(Object.keys(data.rates)[0]);
      }
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') setAmount(value);
    else if (name === 'fromCurrency') setFromCurrency(value);
    else if (name === 'toCurrency') setToCurrency(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !fromCurrency || !toCurrency) {
      setResult('Please fill in all fields.');
      return;
    }

    try {
      const fromRate = currencies[fromCurrency];
      const toRate = currencies[toCurrency];

      if (fromRate && toRate) {
        const rate = toRate / fromRate;
        const convertedAmount = (amount * rate).toFixed(2);
        setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      } else {
        setResult('Currency not available.');
      }
    } catch (error) {
      console.error('Error converting currencies:', error);
      setResult('Error fetching conversion rate.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Currency Converter</h2>
        <CurrencyInput
          currencies={currencies}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {loading && <p className="text-gray-700 text-center mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-4">Error: {error.message}</p>}
        <CurrencyResult result={result} />
      </div>
    </div>
  );
};

export default CurrencyConverter;
