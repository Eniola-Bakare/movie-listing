"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { useAppContext } from "./_components/_Hooks/AppContext";
const EachMovie = lazy(() => import("./_components/EachMovie"));
// import EachMovie from "./EachMovie";
import Spinner from "./_components/Spinner";

export default function AllMoviesFetched({ movieList }) {
  const {
    pageNo,
    setMovieList,
    setPageNo,
    searchQuery,
    setSearchQuery,
    targetRef,
    debouncedSearchQuery,
  } = useAppContext();
  const [emptySearch, setEmptySearch] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " + process.env.NEXT_PUBLIC_API_Key       },
    };
    async function fetcherFunc() {
      const localMovie = localStorage.getItem("movieList");
      const localPageNo = localStorage.getItem("pageNo");
      const localSearchQuery = localStorage.getItem("searchQuery");
      if (localMovie && localPageNo) {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setPageNo(JSON.parse(localPageNo));
        setMovieList(JSON.parse(localMovie));
        setSearchQuery(JSON.parse(localSearchQuery));
        return;
      }
      let fetched;
      if (debouncedSearchQuery) {
        setEmptySearch(false);
        fetched = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${debouncedSearchQuery}&include_adult=false&language=en-US&page=${pageNo}`,
          options
        );
      } else {
        fetched = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`,
          options
        );
      }
      if (!fetched.ok) {
        throw new Error(`Error: ${fetched.status}`);
      }
      let response;
      let movieData;
      try {
        response = await fetched.json();
        movieData = response.results;
        console.log(movieData);
        if (movieData.length <= 0) {
          return setEmptySearch("true");
        }
        return setMovieList(movieData);
      } catch (error) {
        throw new Error(`Error: ${error.message}`);
      }
    }
    fetcherFunc();
  }, [pageNo, debouncedSearchQuery, targetRef]);
  return (
    // <Suspense fallback={<Spinner />}>
    <div
      className={`all_fetched justify-center sm:w-full 2xl:w-fit grid ${
        !emptySearch && "grid-cols-2"
      } lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-y-8 lg:gap-8 2xl:gap-4 sm:p-5`}
    >
      {emptySearch ? (
        <p className="w-full text-justify text-blue-950 font-medium">
          No such movie is available on the database :( Try adjusting your
          search words
        </p>
      ) : (
        movieList?.map((eachMovie) => (
          <Suspense key={eachMovie?.id} fallback={<Spinner />}>
            <EachMovie eachMovie={eachMovie} />
          </Suspense>
        ))
      )}
    </div>
    // </Suspense>
  );
}
