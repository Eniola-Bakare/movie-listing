export default function PageBtns({ setPageNo, pageNo }) {
  function handleNextPage() {
    localStorage.removeItem("movieList");
    localStorage.removeItem("pageNo");
    setPageNo((prev) => prev + 1);
  }
  function handlePrevPage() {
    localStorage.removeItem("movieList");
    localStorage.removeItem("pageNo");
    setPageNo((prev) => {
      return prev == 1 ? 1 : prev - 1;
    });
  }
  return (
    <section className="page_btns flex items-center gap-3 pb-5">
      <div className=" justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-blue-500  hover:bg-blue-800 transition-colors ease-in-out  text-white rounded"
        >
          Prev Page
        </button>
      </div>
      <p className="font-bold text-blue-950">{pageNo}</p>
      <div className=" justify-center mt-4">
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded"
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
