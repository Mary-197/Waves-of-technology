import React, { useState } from 'react';
import './Clima.css';

const apiKey = "8d34953a1210b22642244ac3a150e238";

const Clima: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [error, setError] = useState('');

  const getWeatherData = async (cityName: string) => {
    try {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=pt_br`;
      const res = await fetch(apiURL);
      const data = await res.json();

      if (data.cod === "404") {
        setError("Cidade não encontrada.");
        setWeatherData(null);
        return;
      }

      setWeatherData(data);
      setError('');
    } catch (err) {
      setError("Erro ao buscar dados.");
      setWeatherData(null);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      getWeatherData(city);
    }
  };

  return (
    <div className="clima-container">
      <form onSubmit={handleSearch} className="clima-form">
        <h2>Consulta de Clima</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Digite a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-result">
          <h3>{weatherData.name}</h3>
          <p>Temperatura: {parseInt(weatherData.main.temp)}°C</p>
          <p>Descrição: {weatherData.weather[0].description}</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
          <p>Vento: {weatherData.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Clima;

