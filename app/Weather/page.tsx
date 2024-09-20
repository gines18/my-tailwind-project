'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Add this import at the top

async function fetchWeather(city: string) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=732a88c6f9f8186453f47b435c9ba5f3`;
  const response = await fetch(url);
  const data = await response.json();
  const temperature = data.list[0].main.temp - 273.15;
  const temperatureMax = data.list[0].main.temp_max - 273.15; // Corrected from pressure to temp_max
  const icon = data.list[0].weather[0].icon; // Corrected to access the first weather object
  return [ temperature, temperatureMax, icon ];
}

function WeatherPage() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState<number | null>(null);
  const [temperatureMax, setTemperatureMax] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const [temp, tempMax, fetchedIcon ] = await fetchWeather(city);
        setTemperature(temp);
        setTemperatureMax(tempMax);
        setIcon(fetchedIcon);
      } catch (error) {
        console.error(error);
        setTemperature(null);
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
          {icon ? <Image src={`http://openweathermap.org/img/wn/${icon}.png`} width={70} height={70} alt="Weather icon" /> : <p></p>}
          {temperature ? <p className='text-lg font-semibold'>Temperature: {temperature.toFixed(2)} °C</p> : <p className='text-lg font-semibold'>Temperature ...</p>}
          {temperatureMax ? <p className='text-lg font-semibold'>Max temperature: {temperatureMax.toFixed(2)} °C</p> : <p className='text-lg font-semibold'>Max temperature ...</p>}
    </div>
  );
}

export default WeatherPage;

