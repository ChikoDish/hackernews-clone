import React from "react";
import { Fragment } from "react";
import useFetchData from "../hooks/FatchData";
import Blog from "./Blog";
import Loader from "./Loader";

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useFetchData(type ? type : "top");
  return (
    <Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        {stories.map(({ data: story }) => (
          <Blog key={story.id} story={story} />
        ))}
      </React.Fragment>
    </Fragment>
  );
};

export default ShowStories;
