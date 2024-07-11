"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const targetRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [emptySearch, setemptySearch] = useState(false);

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
        emptySearch,
        setemptySearch,
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
