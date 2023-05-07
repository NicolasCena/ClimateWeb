import {
  useEffect,
  useState,
  memo,
  useMemo,
  ChangeEvent,
  useCallback,
} from "react";
import { Tarjeta } from "../../components/Tarjeta/Tarjeta";
import { BsSearch } from "react-icons/bs";
import { debounce, getIconClass } from "./utils";
import axios from "axios";

interface WeatherCardProps {
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

export const Home = memo(() => {
  const [weatherData, setWeatherData] = useState<WeatherCardProps | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const API_KEY = "0d531db91b0f930890db5503f5c0489e";
  const lang = "es";

  const fetchWeather = useCallback(
    (cityName: string) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=${lang}`
        )
        .then((response) => {
          console.log(response.data);
          const weather = response.data.weather[0];
          const main = response.data.main;
          const wind = response.data.wind;
          const data: WeatherCardProps = {
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
    },[API_KEY, lang]);

  const debouncedFetchWeather = useCallback(debounce(fetchWeather, 500), [fetchWeather]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.length < 5) {
      setError("El valor del input no puede estar vacío");
      setWeatherData(null);
    } else {
      setError("");
      debouncedFetchWeather(inputValue);
    }
  };

  console.log({ ...weatherData });

  return (
    <>
      <div>
        <input type="text" value={value} onChange={handleInputChange} />
        {error && <div>{error}</div>}
      </div>
      
      <img src={weatherData?.icon && getIconClass(weatherData?.icon)} alt="ete" className="imagen"/>
      {weatherData && <Tarjeta {...weatherData} />}
    </>
  );
});
