import EachMovie from "./EachMovie";

export default function AllMoviesFetched({ movieList }) {
  return (
    <div className="all_fetched justify-center sm:w-full 2xl:w-fit grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-y-8 lg:gap-8 2xl:gap-4 sm:p-5">
      {movieList?.map((eachMovie) => (
        <EachMovie key={eachMovie?.id} eachMovie={eachMovie} />
      ))}
    </div>
  );
}
