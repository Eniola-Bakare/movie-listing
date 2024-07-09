"use client";
import Loading from "../Loading";

function EachMovDetails() {
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));
  console.log(selectedMovie);

  if (!selectedMovie) {
    <Loading />;
    return;
  }

  return <span>{selectedMovie.overview}</span>;
}

export default EachMovDetails;
