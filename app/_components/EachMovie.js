import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "../AppContext";
import { useRef } from "react";

export default function EachMovie({ eachMovie }) {
  const router = useRouter();
  const { movieList, pageNo } = useAppContext();

  const handleEachMovie = () => {
    localStorage.setItem("movieList", JSON.stringify(movieList));
    localStorage.setItem("pageNo", JSON.stringify(pageNo));
    localStorage.setItem("selectedMovie", JSON.stringify(eachMovie));
    router.push(`/${eachMovie?.id}`);
  };
  return (
    <div
      key={eachMovie?.id}
      className="w-[100%] md:w-[95%] lg:w-[290px] 2xl:w-full flex flex-col rounded-b-3xl hover:scale-95 transition-transform ease-in-out cursor-pointer"
      onClick={handleEachMovie}
    >
      <Image
        alt="movie poster"
        width={300}
        height={100}
        src={`https://image.tmdb.org/t/p/w500${eachMovie?.poster_path}`}
        className="rounded-t-3xl w-[100%] md:w-full object-cover"
      />

      <div className=" w-[100%]  md:w-full lg:w-full h-[110px] sm:h-[150px] p-3 bg-white/50 shadow-lg shadow-cyan-900/20">
        <span className=" font-medium sm:text-lg text-blue-900 ">Title: </span>
        <p className=" text-wrap text-gray-900 text-xs sm:text-lg font-semibold">
          {eachMovie.title}
        </p>
        <p className="font-semibold text-wrap text-gray-900 text-xs sm:text-lg pt-">
          <span className=" font-semibold text-sm sm:text-lg text-blue-900">
            Release Date:
          </span>{" "}
          <br className="visible sm:hidden" />
          {eachMovie.release_date}
        </p>
      </div>
    </div>
  );
}
