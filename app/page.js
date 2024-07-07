import Image from "next/image";
import heroOne from "/@app/../public/heroImage1.jpg";

export default function Home() {
  return (
    <section className="h-dvh text-gray-50 m-auto p-10">
      <div className=" ">
        <Image fill src={heroOne} alt="a woman watching a movie" />
      </div>
      <div></div>
    </section>
  );
}
