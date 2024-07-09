import EachMovie from "./EachMovie";

export default function AllMoviesFetched({ movieList }) {
  return (
    <div className="w-fit grid 2xl:grid-cols-5 gap-4 gap-y-9 p-5">
      {movieList?.map((eachMovie) => (
        <EachMovie key={eachMovie?.id} eachMovie={eachMovie} />
      ))}
    </div>
  );
}
