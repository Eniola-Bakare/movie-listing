import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <>
      <div className="h-dvh flex flex-col justify-center items-center">
        <Spinner />
        <p className="text-blue-950 font-medium text-lg">LOADING...</p>
      </div>
    </>
  );
}
