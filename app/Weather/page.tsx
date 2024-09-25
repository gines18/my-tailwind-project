'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Add this import at the top

async function fetchWeather(city: string) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=732a88c6f9f8186453f47b435c9ba5f3`;
  const response = await fetch(url);
  const data = await response.json();
  const temperatures = data.list.slice(0, 5).map(item => item.main.temp - 273.15); // Get temperatures for the next 5 days
  const temperatureMax = data.list[0].main.temp_max - 273.15; // Keep max temperature for today
  const icon = data.list[0].weather[0].icon;
  return [ temperatures, temperatureMax, icon ]; // Return array of temperatures
}

function WeatherPage() {
  const [city, setCity] = useState('');
  const [temperatures, setTemperatures] = useState<number[]>([]); // Change to array
  const [temperatureMax, setTemperatureMax] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const [fetchedTemperatures, tempMax, fetchedIcon] = await fetchWeather(city);
        setTemperatures(fetchedTemperatures); // Set array of temperatures
        setTemperatureMax(tempMax);
        setIcon(fetchedIcon);
      } catch (error) {
        console.error(error);
        setTemperatures([]); // Reset temperatures on error
        setTemperatureMax(null);
        setIcon(null);
      }
    };

    if (city) {
      fetchWeatherData();
    }
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
      {temperatures.length > 0 ? (
        temperatures.map((temp, index) => {
          const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const today = new Date().getDay();
          const dayIndex = (today + index) % 7;
          return (
            <div key={index} className='flex items-center space-x-4'>
              <Image src={`http://openweathermap.org/img/wn/${icon}.png`} width={70} height={70} alt={`Weather icon for ${days[dayIndex]}`} />
              <p className='text-lg font-semibold'>{days[dayIndex]} {temp.toFixed(2)} °C</p>
            </div>
          );
        })
      ) : <p className='text-lg font-semibold'>Temperature ...</p>}
      {temperatureMax ? <p className='text-lg font-semibold'>Max temperature: {temperatureMax.toFixed(2)} °C</p> : <p className='text-lg font-semibold'>Max temperature ...</p>}
    </div>
  );
}

export default WeatherPage;

