import EachMovie from "./EachMovie";

export default function AllMoviesFetched({ movieList }) {
  return (
    <div className=" grid 2xl:grid-cols-6 gap-5 p-5">
      {movieList?.map((eachMovie) => (
        <EachMovie key={eachMovie?.id} eachMovie={eachMovie} />
      ))}
    </div>
  );
}
