"use client";

import heroPortrait from "/@app/../public/heroPortrait1.jpg";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import PageBtns from "./PageBtns";
import { useAppContext } from "./_Hooks/AppContext";
import HeroHeader from "./HeroHeader";
import Spinner from "./Spinner";
const HeroMain = lazy(() => import("./HeroMain"));

export default function HeroSection({ currentPage }) {
  // ContextAPI state
  const {
    pageNo,
    movieList,
    setSearchQuery,
    searchQuery,
    targetRef,
    setPageNo,
  } = useAppContext();

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

  return (
    <section className="w-full flex flex-col items-center text-gray-50 m-auto ">
      <HeroHeader curSlide={curSlide} handleScroll={handleScroll} />

      <Suspense fallback={<Spinner />}>
        <HeroMain />
      </Suspense>
    </section>
  );
}
