"use client";
import { AppContextProvider } from "./AppContext";

function ContextProvider({ children }) {
  return <AppContextProvider>{children}</AppContextProvider>;
}

export default ContextProvider;
