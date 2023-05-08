import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface WeatherData {
  city?: string;
  icon?: string;
  description?: string;
  temperature?: number;
  feelsLike?: number;
  temp?: number;
  tempMin?: number;
  tempMax?: number;
  humidity?: number;
  windSpeed?: number;
  windDirection?: number;
}

export const useWeather = (cityName: string, API_KEY: string, lang: string): WeatherData => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});

  const fetchWeather = useCallback(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=${lang}`)
      .then((response) => {
        const weather = response.data.weather[0];
        const main = response.data.main;
        const wind = response.data.wind;
        const data: WeatherData = {
          city: response.data.name,
          description: weather.description,
          icon: weather.icon,
          temp: main.temp,
          tempMin: main.temp_min,
          tempMax: main.temp_max,
          feelsLike: main.feels_like,
          humidity: main.humidity,
          windSpeed: wind.speed,
          windDirection: wind.deg,
        };
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
        setWeatherData({});
      });
  }, [cityName, API_KEY, lang]);

  useEffect(() => {
    if (cityName.length > 4) {
      fetchWeather();
    }
  }, [cityName, fetchWeather]);

  return weatherData;
};
