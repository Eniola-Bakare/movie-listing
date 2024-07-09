import Image from "next/image";

import AllMoviesFetched from "./_components/AllMoviesFetched";
import HeroSection from "./_components/HeroSection";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTgzYmExZTcxMGFjZTNhNGIzZTEwNjdiZGVlODI4MyIsIm5iZiI6MTcyMDQ1MDQzNy45NjcyODgsInN1YiI6IjY2OGJmYzM1NjA5NzIzYmZkYmVhZWJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_VsAuXZdw-6WW4frlZzelsqDQIpA5nI_GTjbrOU4YU",
    },
  };

  const fetched = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  let response;
  let movieData;
  try {
    response = await fetched.json();
    movieData = response.results;
    console.log(movieData);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="flex flex-col items-center text-gray-50 m-auto ">
      <HeroSection movieList={movieData} />
    </section>
  );
}
