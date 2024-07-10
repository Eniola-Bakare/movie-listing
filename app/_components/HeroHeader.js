'use client'

function HeroHeader({curSlide, handleScroll}) {
    return (
      <>
        <section className="w-full h-dvh overflow-hidden">
          <div className="absolute top-10 z-10 left-10">
        </div>
          <div
            className={`relative flex flex-col justify-center items-center w-full h-dvh  bg-cover bg-top `}
            style={{ backgroundImage: curSlide }}
          >
            <div className="mt-[100%] md:mt-[30%] flex flex-col text-center items-center justify-center">
              <p className="text-wrap text-center text-base md:text-2xl lg:text-2xl font-semibold shadow-md shadow-blue-950 p-3 w-[80%] sm:w-[60%] mb-24 bg-blue-950/45">
                Welcome to the captivating world of the Movie Lounge. Taking you
                on your journey of entertainment!
              </p>
              <h1
                className=" z-40 animate-bounce cursor-pointer"
                onClick={(e) => handleScroll(e)}
              >
                <svg
                  className="animate-bounce arrows "
                  onClick={(e) => handleScroll(e)}
                >
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
                Scroll down
              </h1>
            </div>
          </div>
        </section>
      </>
    );
}

export default HeroHeader
