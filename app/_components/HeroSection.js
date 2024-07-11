"use client";

import heroPortrait from "/@app/../public/heroPortrait1.jpg";
import { lazy, Suspense ,useEffect, useRef, useState } from "react";
import PageBtns from "./PageBtns";
import { useAppContext } from "../AppContext";
import HeroHeader from "./HeroHeader";
import Loading from "../loading";
import Spinner from "./Spinner";
const AllMoviesFetched = lazy(() => import("./AllMoviesFetched"));

export default function HeroSection({ currentPage }) {
  // ContextAPI state
  const { pageNo, movieList, setSearchQuery, targetRef, setPageNo } =
    useAppContext();

  // Local state
  const [heroImage, setHeroImage] = useState([
    'url("/heroPortrait1.jpg")',
    'url("/heroImage7.jpg")',
    'url("/heroImage5.jpg")',
    'url("/heroImage3.jpg")',
    'url("/heroImage6.jpg")',
  ]);
  const [curSlide, setCurSlide] = useState(heroPortrait);
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
  function handleScroll(e) {
    e.stopPropagation();
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
      <HeroHeader curSlide={curSlide} handleScroll={handleScroll} />

      <section
        ref={targetRef}
        className="w-full h-dvh flex flex-col items-center gap-5 p-5"
      >
        <input
          placeholder="search for a movie"
          onChange={(e) => handleSearchInput(e.target.value)}
          className=" w-10/12 md:w-[60%] lg:w-[50%] 2xl:w-[35%] mt-5 p-3 pl-6 rounded-3xl focus:outline-blue-500 text-gray-500"
        />
        {/* <Suspense fallback={<Spinner />}> */}
          <AllMoviesFetched movieList={movieList} />
        {/* </Suspense> */}
        <PageBtns setPageNo={setPageNo} pageNo={pageNo} />
      </section>
    </section>
  );
}
