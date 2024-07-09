"use client";
import { useRouter } from "next/navigation";
import Loading from "../Loading";

function EachMovDetails() {
  const router = useRouter();
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));
  console.log(selectedMovie);

  const handleBack = () => {
    router.back();
    
  };
  if (!selectedMovie) {
    <Loading />;
    return;
  }


  return (
    <section>
      <div>
        <svg
          className="svg-icon w-[80px] fill-blue-900"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleBack}
        >
          <path d="M932.039565 483.875452 163.745365 483.875452l350.590843-311.627437c11.008728-9.784854 12.000312-26.6428 2.215458-37.651528-9.7869-11.005658-26.63973-11.999288-37.652552-2.214435L74.241888 492.064972c-5.693676 5.062296-8.950859 12.31549-8.950859 19.934005s3.257184 14.871709 8.950859 19.934005l404.65825 359.684966c5.080715 4.51585 11.405771 6.735401 17.708314 6.735401 7.352455 0 14.675234-3.022847 19.944238-8.950859 9.784854-11.008728 8.79327-27.865651-2.215458-37.652552L160.472831 537.214265l771.566734 0c14.729469 0 26.669406-11.94096 26.669406-26.669406C958.708971 495.815389 946.769035 483.875452 932.039565 483.875452z" />
        </svg>
      </div>
    </section>
  );
}

export default EachMovDetails;
