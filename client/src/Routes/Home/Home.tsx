import { memo } from "react";
import { SearchWather } from "../../components/SearchWeather/SearchWather";
import { News } from "../../components/News/News";

export const Home = memo(() => {
  return (
    <div>
      <News />
      <SearchWather />
    </div>
  );
});
