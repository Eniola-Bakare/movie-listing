import { useAppContext } from "./_Hooks/AppContext";
import AllMoviesFetched from "../AllMoviesFetched";
import PageBtns from "./PageBtns";
import { useDebounce } from "./_Hooks/useDebounce";

function HeroMain() {
  const {
    targetRef,
    searchQuery,
    movieList,
    pageNo,
    setPageNo,
    setSearchQuery,
    debouncedSearchQuery,
    setDebouncedSearchQuery,
  } = useAppContext();

  function handleSearchInput(value) {
    localStorage.removeItem("movieList");
    localStorage.removeItem("pageNo");
    setPageNo(1);
    setSearchQuery(value);
  }
  useDebounce({
    fn: () => setDebouncedSearchQuery(searchQuery),
    deps: searchQuery,
    timer: 1000,
  });
  return (
    <section
      ref={targetRef}
      className="w-full h-dvh flex flex-col items-center gap-5 p-5"
    >
      <input
        placeholder="search for a movie"
        value={searchQuery}
        onChange={(e) => handleSearchInput(e.target.value)}
        className=" w-10/12 md:w-[60%] lg:w-[50%] 2xl:w-[35%] mt-5 p-3 pl-6 rounded-3xl focus:outline-blue-500 text-gray-500"
      />{" "}
      
      <AllMoviesFetched movieList={movieList} />
      <PageBtns setPageNo={setPageNo} pageNo={pageNo} />
    </section>
  );
}

export default HeroMain;
