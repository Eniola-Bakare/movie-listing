"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const targetRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTgzYmExZTcxMGFjZTNhNGIzZTEwNjdiZGVlODI4MyIsIm5iZiI6MTcyMDQ1MDQzNy45NjcyODgsInN1YiI6IjY2OGJmYzM1NjA5NzIzYmZkYmVhZWJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_VsAuXZdw-6WW4frlZzelsqDQIpA5nI_GTjbrOU4YU",
      },
    };
    async function fetcherFunc() {
      const localMovie = localStorage.getItem("movieList");
      const localPageNo = localStorage.getItem("pageNo");
      if (localMovie && localPageNo) {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setPageNo(JSON.parse(localPageNo));
        setMovieList(JSON.parse(localMovie));
      }

      let fetched;
      if (searchQuery && searchQuery.length >= 2) {
        fetched = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${pageNo}`,
          options
        );
      } else {
        fetched = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`,
          options
        );
      }
      let response;
      let movieData;
      try {
        response = await fetched.json();
        movieData = response.results;
        return setMovieList(movieData);
      } catch (error) {
        console.log(error);
      }
    }
    fetcherFunc();
  }, [pageNo, searchQuery]);

  return (
    <AppContext.Provider
      value={{
        targetRef,
        movieList,
        setMovieList,
        pageNo,
        setPageNo,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const value = useContext(AppContext);
  if (!value) {
    throw new Error(
      "App context has been used outside of the app context provider"
    );
  }
  return value;
}

export { AppContextProvider, useAppContext };
