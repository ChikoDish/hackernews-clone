import React from "react";
import { Fragment } from "react";
import useFetchData from "../hooks/FatchData";
import Blog from "./Blog";

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useFetchData(type ? type : "top");
  return (
    <Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: story }) => (
            <Blog key={story.id} story={story} />
          ))}
        </React.Fragment>
      )}
    </Fragment>
  );
};

export default ShowStories;
