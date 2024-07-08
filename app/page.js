"use client";
import Image from "next/image";
import heroOne from "/@app/../public/heroImage1.jpg";
import heroTwo from "/@app/../public/heroImage2.jpg";
import heroThree from "/@app/../public/heroImage3.jpg";
import heroFour from "/@app/../public/heroImage4.jpg";
import heroFive from "/@app/../public/heroImage5.jpg";
import NavBar from "./_components/NavBar";
import { useEffect, useRef, useState } from "react";

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
  const targetRef = useRef(null);

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

  function handleScroll() {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="flex flex-col items-center text-gray-50 m-auto ">
      <div className=" h-dvh overflow-hidden">
        <div className="absolute top-10 z-10 left-10">
          <NavBar />
        </div>{" "}
        <div
          className={`flex flex-col w-full bg-blue-500 `}
          onClick={handleScroll}
        >
          <Image
            src={curSlide || heroOne}
            alt="a woman watching a movie"
            className="w-full relative"
          />
          <div className="absolute top-2/4 left-1/2 hover:scale-50 animate-bounce cursor-pointer">
            <h4 className="">Scroll down</h4>
            <svg class="arrows mb-5">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>

      <div ref={targetRef} className="h-dvh ">
        Next Nextionnnnnnnnnnnnnnnnnnnnnnnnnnnn lo
      </div>
    </section>
  );
}
