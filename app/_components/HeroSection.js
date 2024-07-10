"use client";

import Image from "next/image";
import NavBar from "./NavBar";
import heroOne from "/@app/../public/heroImage1.jpg";
import heroTwo from "/@app/../public/heroImage2.jpg";
import heroThree from "/@app/../public/heroImage3.jpg";
import heroFour from "/@app/../public/heroImage4.jpg";
import heroFive from "/@app/../public/heroImage5.jpg";
import { useEffect, useRef, useState } from "react";
import AllMoviesFetched from "./AllMoviesFetched";
import PageBtns from "./PageBtns";
import { useAppContext } from "../AppContext";

export default function HeroSection({ currentPage }) {
  // ContextAPI state
  const { pageNo, movieList, setSearchQuery, targetRef, setPageNo } =
    useAppContext();

  // Local state
  const [heroImage, setHeroImage] = useState([
    heroOne,
    heroTwo,
    heroThree,
    heroFour,
    heroFive,
  ]);
  const [curSlide, setCurSlide] = useState(heroOne);
  const [slideNo, setSlideNo] = useState(0);

  // Hero section slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (slideNo >= heroImage.length - 1) {
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

  //scroll function from hero section to movie list
  function handleScroll() {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function handleSearchInput(value) {
    localStorage.removeItem("movieList");
    localStorage.removeItem("pageNo");
    setPageNo(1);
    setSearchQuery(value);
  }

  return (
    <section className="w-full flex flex-col items-center text-gray-50 m-auto ">
      <section className=" h-dvh overflow-hidden">
        {/* <div className="absolute top-10 z-10 left-10">
          <NavBar />
        </div> */}
        <div
          className="flex flex-col w-full bg-blue-500 "
          onClick={handleScroll}
        >
          <Image
            src={curSlide || heroOne}
            alt="a woman watching a movie"
            className="w-full relative"
          />
          <div class="absolute top-2/4 left-1/2 hover:scale-50 animate-bounce cursor-pointer">
            <h4 className="">Scroll down</h4>
            <svg className="arrows mb-5">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </section>

      <section
        ref={targetRef}
        className="w-full h-dvh flex flex-col items-center gap-5 p-5"
      >
        <input
          placeholder="search for a movie"
          onChange={(e) => handleSearchInput(e.target.value)}
          className="w-[30%] mt-5 p-3 pl-6 rounded-3xl focus:outline-blue-500 text-gray-500"
        />
        <AllMoviesFetched movieList={movieList} />
        <PageBtns setPageNo={setPageNo} pageNo={pageNo} />
      </section>
    </section>
  );
}
