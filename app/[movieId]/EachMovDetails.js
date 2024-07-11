"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

function EachMovDetails() {
  const router = useRouter();
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));

  const handleBack = () => {
    router.back();
    localStorage.removeItem("selectedMovie");
  };

  return (
    <section className="w-full h-dvh flex flex-col justify-start p-6 md:p-12 gap-6 sm:gap-3 md:gap-16  ">
      <button
        className="back_btn w-fit flex items-center gap-4 hover:scale-90 ease-in-out transition-all"
        onClick={handleBack}
      >
        <svg
          className="svg-icon w-[40px] fill-blue-900"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M932.039565 483.875452 163.745365 483.875452l350.590843-311.627437c11.008728-9.784854 12.000312-26.6428 2.215458-37.651528-9.7869-11.005658-26.63973-11.999288-37.652552-2.214435L74.241888 492.064972c-5.693676 5.062296-8.950859 12.31549-8.950859 19.934005s3.257184 14.871709 8.950859 19.934005l404.65825 359.684966c5.080715 4.51585 11.405771 6.735401 17.708314 6.735401 7.352455 0 14.675234-3.022847 19.944238-8.950859 9.784854-11.008728 8.79327-27.865651-2.215458-37.652552L160.472831 537.214265l771.566734 0c14.729469 0 26.669406-11.94096 26.669406-26.669406C958.708971 495.815389 946.769035 483.875452 932.039565 483.875452z" />
        </svg>{" "}
        <span className="font-bold text-blue-900"> Go back</span>{" "}
      </button>

      <div className="w-fit selected_movie_details flex flex-col md:flex-row justify-start md:items-center gap-8 lg:gap-x-10">
        <Image
          alt="movie poster"
          width={500}
          height={100}
          src={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
          className="rounded-lg w-4/4 lg:w-[20%]"
        />

        <div className="s_text_detail w-[95%] lg:w-[50%] flex flex-col items-start text-justify gap-4">
          <h1 className="text-blue-900">{selectedMovie.title}</h1>
          <p className="2xl:text-xl font-medium text-gray-700">
            <span className="font-semibold"> Brief description:</span>{" "}
            {selectedMovie.overview}
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold"> Release date:</span>{" "}
            {selectedMovie.release_date}
          </p>
          <button
            className="inline-block ease-in-out transition-colors bg-blue-950 hover:bg-blue-800 active:bg-blue-950 text-white font-semibold px-6 py-3 text-lg"
            onClick={() => alert("Streaming: coming soon")}
          >
            Watch here
          </button>
        </div>
      </div>
    </section>
  );
}

export default EachMovDetails;
