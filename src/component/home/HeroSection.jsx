import React from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";

const HeroSection = ({ heroImage = "/images/img1.jpg" }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-surface-muted">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary-50 blur-3xl" />

      <div className="page-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="relative z-10 text-center lg:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            <HiSparkles className="text-sm" />
            New Season Collection
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Discover Products{" "}
            <span className="text-primary-600">You&apos;ll Love</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0">
            Shop quality products at great prices — from tech and fashion to
            everyday essentials, all in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/products"
              className="btn-primary px-8 py-3 text-base shadow-md shadow-primary-600/20 transition-transform hover:-translate-y-0.5"
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="btn-outline px-8 py-3 text-base transition-transform hover:-translate-y-0.5"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-200/40 to-primary-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white p-3 shadow-2xl shadow-primary-900/10">
              <img
                src={heroImage}
                alt="Featured products"
                className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-square"
                onError={(e) => {
                  e.currentTarget.src = "/images/img1.jpg";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-medium text-text-muted">Trusted by</p>
              <p className="text-lg font-bold text-text-primary">10K+ Shoppers</p>
            </div>
            <div className="absolute -right-2 -top-2 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-medium text-text-muted">Top Rated</p>
              <p className="text-lg font-bold text-primary-600">4.8 ★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
