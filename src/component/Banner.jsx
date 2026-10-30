import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const imgArr = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];

  const nextSlide = () => {
    setIndex((preValue) => (preValue + 1) % imgArr.length);
  };
  const preSlide = () => {
    setIndex((preValue) => (preValue - 1 + imgArr.length) % imgArr.length);
  };
  const goToSlide = (ind) => {
    setIndex(ind);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-slate-950">
      {/* Slide track */}
      <div className="relative h-[45vh] w-full sm:h-[55vh] md:h-[65vh] lg:h-[72vh]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {imgArr.map((src, ind) => (
            <div className="relative h-full min-w-full flex-shrink-0" key={ind + 1}>
              <img
                src={src}
                alt={`Slide ${ind + 1}`}
                className="h-full w-full object-cover object-center"
              />
              {/* Bottom gradient for indicator readability */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Top gradient for nav-bar blending */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* ── Prev button ── */}
        <button
          type="button"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-black/55 hover:scale-105 focus:outline-none sm:flex"
          onClick={preSlide}
          aria-label="Previous slide"
        >
          <GrPrevious className="text-base" />
        </button>

        {/* ── Next button ── */}
        <button
          type="button"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-black/55 hover:scale-105 focus:outline-none sm:flex"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <GrNext className="text-base" />
        </button>

        {/* ── Slide indicators ── */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {imgArr.map((_, ind) => (
            <button
              key={ind}
              type="button"
              aria-label={`Go to slide ${ind + 1}`}
              onClick={() => goToSlide(ind)}
              className={`rounded-full transition-all duration-300 ${
                ind === index
                  ? "h-2.5 w-7 bg-white shadow-sm"
                  : "h-2.5 w-2.5 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
