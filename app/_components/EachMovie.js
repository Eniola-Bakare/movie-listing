import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EachMovie({ eachMovie }) {
  const router = useRouter();

  const handleEachMovie = () => {
    localStorage.setItem("selectedMovie", JSON.stringify(eachMovie));
    router.push(`/${eachMovie?.id}`);
  };
  return (
    <div
      key={eachMovie?.id}
      className="w-full flex flex-col rounded-b-3xl hover:scale-95 transition-transform ease-in-out cursor-pointer"
      onClick={handleEachMovie}
    >
      <Image
        alt="movie poster"
        width={300}
        height={100}
        src={`https://image.tmdb.org/t/p/w500${eachMovie?.poster_path}`}
        className="rounded-t-3xl w-full object-cover"
      />

      <div className=" w- h-[150px] p-3 bg-white/50 shadow-lg shadow-cyan-900/20">
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
