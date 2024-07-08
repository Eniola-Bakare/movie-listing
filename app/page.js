"use client";
import Image from "next/image";
import heroOne from "/@app/../public/heroImage1.jpg";
import heroTwo from "/@app/../public/heroImage2.jpg";
import heroThree from "/@app/../public/heroImage3.jpg";
import heroFour from "/@app/../public/heroImage4.jpg";
import heroFive from "/@app/../public/heroImage5.jpg";
import NavBar from "./_components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [heroImage, setHeroImage] = useState([
    heroOne,
    heroTwo,
    heroThree,
    heroFour,
    heroFive,
  ]);
  const [slideNo, setSlideNo] = useState(0);
  const [curSlide, setCurSlide] = useState(heroOne);

  useEffect(() => {
    // first;
    // set an interval

    const slideInterval = setInterval(() => {
      if (slideNo == heroImage.length) {
        setCurSlide(heroImage[0]);
        setSlideNo(0);
      } else if (slideNo < heroImage.length) {
        setCurSlide(heroImage[slideNo + 1]);
        setSlideNo((prev) => prev + 1);
      }
      // else if (slideNo > heroImage.length) {
      //   setCurSlide(heroImage[slideNo++]);
      //   setSlideNo((prev) => prev + 1);
      // }
    }, 3000);

    //
    return () => {
      clearInterval(slideInterval);
    };
  }, [heroImage, slideNo]);

  console.log("first");
  return (
    <section className="flex flex-col items-center text-gray-50 m-auto">
      <div className="absolute top-10 z-10 left-10">
        <NavBar />
      </div>
      <div className={`w-screen bg-blue-500 relative `}>
        <Image
          src={curSlide || heroOne}
          alt="a woman watching a movie"
          className="w-full"
        />
      </div>
      <div className="absolute bottom-20">
        <h1>Welcome to the Movie Loun_Ge</h1>
      </div>
    </section>
  );
}
