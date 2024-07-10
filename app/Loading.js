import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <>
      <div className="h-dvh bg-pink-600 flex flex-col justify-center items-center">
        <Spinner />
        <p className="text-blue-950 font-medium text-lg">Loading...</p>
      </div>
    </>
  );
}
