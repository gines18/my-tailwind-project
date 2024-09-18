'use client'
import React, { useState, useEffect } from 'react';

async function fetchWeather(city: string) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=732a88c6f9f8186453f47b435c9ba5f3`;
  const response = await fetch(url);
  const data = await response.json();
  const temperature = data.list[0].main.temp - 273.15;
  return temperature ;
}

function WeatherPage() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      const temp: number = await fetchWeather(city);
      setTemperature(temp);
    };

    fetchTemperature();
  }, [city]);

  return (
    <div className='flex flex-col justify-center items-center space-y-4 mb-11'>
        <p className='text-lg font-semibold'>Check the weather in your city:</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
      />
          {temperature ? <p className='text-lg font-semibold'>Temperature: {temperature.toFixed(2)} °C</p> : <p className='text-lg font-semibold'>Loading...</p>}
    </div>
  );
}

export default WeatherPage;
  
