import useSWR from 'swr';
import axios from 'axios';

function useWeatherData(country: string) {
  const { data, error } = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=0d531db91b0f930890db5503f5c0489e&lang=es`, 
  url => axios(url).then(res => res.data));
  
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useWeatherData;
