'use client'
import { createContext, useContext, useRef } from "react";

const AppContext = createContext();

function AppContextProvider({children}) {
  const targetRef = useRef(null);

  return (
    <AppContext.Provider
      value={
        targetRef
      }
      {...children}
    ></AppContext.Provider>
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

export {AppContext, useAppContext };
