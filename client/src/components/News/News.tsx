import { useState } from "react";
import { useNews } from "../../hooks/useNews";

export const News = () => {
  const { news, isError, isLoading } = useNews();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {isError.message}</div>}
      {!isLoading && !isError && (
        <>
          {news.articles.slice(0,10)?.map((article) => (
            <div key={article.url}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};
