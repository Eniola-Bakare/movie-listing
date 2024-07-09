export default function PageBtns({ setPageNo }) {
  function handleNextPage() {
    setPageNo((prev) => prev + 1);
  }
  function handlePrevPage() {
    setPageNo((prev) => {
      return prev == 1 ? 1 : prev - 1;
    });
  }
  return (
    <section className="page_btns flex gap-3">
      <div className=" justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Prev Page
        </button>
      </div>{" "}
      <div className=" justify-center mt-4">
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
