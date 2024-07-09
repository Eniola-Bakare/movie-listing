import Image from "next/image";

import AllMoviesFetched from "./_components/AllMoviesFetched";
import HeroSection from "./_components/HeroSection";

export default async function Home() {
  return (
    <section className="flex flex-col items-center text-gray-50 m-auto ">
      <HeroSection />
    </section>
  );
}
