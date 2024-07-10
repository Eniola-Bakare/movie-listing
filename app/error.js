"use client";

import { useRouter } from "next/navigation";
import HeroHeader from "./_components/HeroHeader";

export default function Error({ error, _ }) {
  const router = useRouter();
  const handleRefresh = () => {
    router.push("/");
  };
  return (
    <main className="flex h-dvh m-auto justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">
        <span className="font-medium">Error:</span> {error.message}
      </p>
      <button
        className="inline-block bg-blue-950 text-white font-semibold px-6 py-3 text-lg"
        onClick={handleRefresh}
      >
       Go Home
      </button>
    </main>
  );
}
