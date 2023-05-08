import { ChangeEvent, useState } from "react";
import { useWeather } from "../../hooks/useWeather";
import { Principal } from "../Principal/Principal";

export const SearchWather = () => {
  const [city, setCity] = useState("");
  const API_KEY = "0d531db91b0f930890db5503f5c0489e";
  const lang = "es";
  const weatherData = useWeather(city, API_KEY, lang);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCity(inputValue);
  };
  return (
    <div className="search-weather">
      <div className="box-search">
        <input type="text" value={city} onChange={handleInputChange} />
      </div>

      <div className="box-data">
        <Principal {...weatherData} />
      </div>
    </div>
  );
};
