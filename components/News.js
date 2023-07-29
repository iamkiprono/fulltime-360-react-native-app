import { View, Text, ActivityIndicator, Button } from "react-native";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Error from "./Error";

export default function News() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getNews = async () => {
    try {
      setError(false);

      setLoading(true);
      const res = await fetch("https://blog-api-kiprono.onrender.com/blogs/");
      const data = await res.json();
      setLoading(false);
      setNews(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  if (error) {
    return <Error retry={getNews} />;
  }
  return (
    <View className="bg-[#e9e6e6be] px-2 flex-1">
      {loading && <ActivityIndicator />}
      {news?.map((neww) => {
        return <NewsCard key={neww._id} content={neww} />;
      })}
    </View>
  );
}
