import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=london&appid=0d531db91b0f930890db5503f5c0489e&lang=es"
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    console.log(data)

  return <div>Home</div>;
};
