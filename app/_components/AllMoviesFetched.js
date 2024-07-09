import Image from "next/image";

export default function AllMoviesFetched({movieList}) {
  return (
    <div className=" flex flex-wrap">
      {movieList?.map((eachMovie) => (
        <div key={eachMovie?.id}>
          <Image
            alt="movie poster"
            width={300}
            height={100}
            src={`https://image.tmdb.org/t/p/w500${eachMovie?.poster_path}`}
          />
          <p key={eachMovie.id}>{eachMovie.title}</p>
        </div>
      ))}
    </div>
  );
}
