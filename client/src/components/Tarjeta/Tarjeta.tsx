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
export const Tarjeta: React.FC<WeatherCardProps> = ({
  city,
  icon,
  description,
  temperature,
  feelsLike,
  temp,
  tempMin,
  tempMax,
  humidity,
}) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>{description}</p>
      <div className="temperature-info">
        <div className="temperature">{temp}°C</div>
        <div className="feels-like">Feels like {feelsLike}°C</div>
      </div>
      <div className="temp-range-info">
        <div className="temp-min">Min: {tempMin}°C</div>
        <div className="temp-max">Max: {tempMax}°C</div>
      </div>
      <div className="humidity-info">Humidity: {humidity}%</div>
    </div>
  );
};
