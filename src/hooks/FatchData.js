import { useState, useEffect } from "react";
import { getStories } from "../utils/apis";

const useFetchData = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [type]);
  return { isLoading, stories };
};

export default useFetchData;
