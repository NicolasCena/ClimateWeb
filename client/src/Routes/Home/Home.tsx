import { useEffect, useState, memo, useMemo } from "react";
import { Tarjeta } from "../../components/Tarjeta/Tarjeta";
import axios from "axios";
import weatherAPIResponse from "../../modules/weatherAPI";

export const Home = memo(() => {
  const [weatherData, setWeatherData] = useState<weatherAPIResponse | null>(null);

  const weatherPromise = useMemo(
    () =>
      axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=london&appid=0d531db91b0f930890db5503f5c0489e&lang=es"
      ),
    []
  );

  useEffect(() => {
    weatherPromise
      .then((response) => {
        console.log(response.data)
        const weather = response.data.weather[0];
        const main = response.data.main;
        const wind = response.data.wind;
        const data = {
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
      .catch((error) => console.log(error));
  }, [weatherPromise]);

  console.log({...weatherData})

  return <>
    {
      weatherData && <Tarjeta {...weatherData} />
    }
  </>;
});
