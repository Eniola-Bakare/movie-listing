"use client";

import { useAppContext } from "../AppContext";

export default function PageBtns({ setPageNo, pageNo }) {
  const { targetRef } = useAppContext();

  function handlePage(type) {
    localStorage.removeItem("movieList");
    localStorage.removeItem("pageNo");

    if (type == "next") {
      setPageNo((prev) => prev + 1);
    } else if ((type = "prev")) {
      setPageNo((prev) => {
        return prev == 1 ? 1 : prev - 1;
      });
    }
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="page_btns flex justify-center items-center gap-3 pb-5 mt4">
      <div className="flex justify-center items-center">
        <button
          onClick={() => handlePage("prev")}
          className="px-4 py-2 bg-blue-500  hover:bg-blue-800 transition-colors ease-in-out  text-white rounded"
        >
          Prev Page
        </button>
      </div>
      <p className="font-bold text-blue-950 text-center self-center ">
        {pageNo}
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => handlePage("next")}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded"
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
