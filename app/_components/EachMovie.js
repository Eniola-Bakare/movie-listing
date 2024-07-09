import Image from "next/image";

export default function EachMovie({ eachMovie }) {
  function handleEachMovie() {
    console.log("handleEach");
  }
  return (
    <div
      key={eachMovie?.id}
      className=" flex flex-col h-[600px] rounded-b-3xl hover:size-72 transition-transform ease-in-out cursor-pointer"
      onClick={handleEachMovie}
    >
      <Image
        alt="movie poster"
        width={300}
        height={100}
        src={`https://image.tmdb.org/t/p/w500${eachMovie?.poster_path}`}
        className="rounded-t-3xl"
      />

      <div className="h-full p-3 bg-white/50">
        <span className=" font-medium text-lg text-blue-900 ">Title: </span>
        <p className=" text-wrap text-gray-900 text-lg font-semibold">
          {eachMovie.title}
        </p>
        <p className="font-semibold text-wrap text-gray-900 text-lg pt-">
          <span className=" font-semibold text-lg text-blue-900">
            Release Date:
          </span>{" "}
          {eachMovie.release_date}
        </p>
      </div>
    </div>
  );
}
