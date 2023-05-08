import useSWR from "swr";
import axios from "axios";

export const useNews = () => {
  const API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-04-08&sortBy=publishedAt&apiKey=0c9bcabc8ac6460fa909aaf391a70e95";

  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };
  
  const { data, error } = useSWR(API_URL, fetcher);

  return {
    news: data,
    isLoading: !error && !data,
    isError: error,
  };
};
