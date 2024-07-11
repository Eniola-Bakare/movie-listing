import { useEffect } from "react";

export const useDebounce = (payload) => {
  const { fn, deps, timer = 1000 } = payload;
  useEffect(() => {
    const timerId = setInterval(fn, timer);
    return () => clearTimeout(timerId);
  }, [fn, deps, timer]);
};
