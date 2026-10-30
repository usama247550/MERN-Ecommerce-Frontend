import React from "react";
import { Link } from "react-router-dom";

const PromoBanner = ({ image = "/images/img2.jpg" }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-text-primary to-gray-800 shadow-xl">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:py-16">
              <span className="mb-3 inline-block rounded-full bg-primary-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-300">
                Limited Offer
              </span>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Upgrade Your Everyday
              </h2>
              <p className="mt-4 max-w-md text-base text-gray-300 sm:text-lg">
                Discover our latest collection of premium products curated for
                modern living.
              </p>
              <Link
                to="/products"
                className="btn-primary mt-8 inline-flex bg-white px-8 py-3 text-text-primary hover:bg-gray-100"
              >
                Shop Collection
              </Link>
            </div>
            <div className="relative hidden h-full min-h-[280px] lg:block">
              <img
                src={image}
                alt="Promotional collection"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-text-primary via-text-primary/40 to-transparent" />
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
