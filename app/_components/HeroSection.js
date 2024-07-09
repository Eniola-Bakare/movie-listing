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
import { useRouter } from "next/router";
import PageBtns from "./PageBtns";

export default function HeroSection({ currentPage }) {
  const [heroImage, setHeroImage] = useState([
    heroOne,
    heroTwo,
    heroThree,
    heroFour,
    heroFive,
  ]);
  const [slideNo, setSlideNo] = useState(0);
  const [curSlide, setCurSlide] = useState(heroOne);

  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const targetRef = useRef(null);
  // const router = useRouter();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTgzYmExZTcxMGFjZTNhNGIzZTEwNjdiZGVlODI4MyIsIm5iZiI6MTcyMDQ1MDQzNy45NjcyODgsInN1YiI6IjY2OGJmYzM1NjA5NzIzYmZkYmVhZWJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_VsAuXZdw-6WW4frlZzelsqDQIpA5nI_GTjbrOU4YU",
      },
    };
    async function fetcher() {
      const fetched = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`,
        options
      );
      let response;
      let movieData;
      try {
        response = await fetched.json();
        movieData = response.results;
        setMovieList(movieData);
        console.log(movieData);
      } catch (error) {
        console.log(error);
      }
    }

    fetcher();
  }, [pageNo]);

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

  function handleScroll() {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
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
          <div class="absolute top-2/4 left-1/2 hover:scale-50 animate-bounce cursor-pointer">
            <h4 className="">Scroll down</h4>
            <svg className="arrows mb-5">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>

      <div ref={targetRef} className="h-dvh flex flex-wrap">
        <AllMoviesFetched movieList={movieList} />
        <PageBtns setPageNo={setPageNo} />
      </div>
    </>
  );
}
