import React from "react";
import { IoIosStar } from "react-icons/io";
import { testimonials } from "../../data/homeMockData";

const TestimonialCard = ({ name, rating, review, initial }) => (
  <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary-200 hover:shadow-md">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
        {initial}
      </div>
      <div>
        <h4 className="font-semibold text-text-primary">{name}</h4>
        <div className="mt-0.5 flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <IoIosStar
              key={i}
              className={`text-sm ${i < rating ? "text-amber-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
      &ldquo;{review}&rdquo;
    </p>
  </article>
);

const Testimonials = () => {
  return (
    <section className="bg-surface-muted py-12 sm:py-16">
      <div className="page-container">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
            Testimonials
          </span>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-text-secondary sm:text-base">
            Real feedback from shoppers who love our products and service.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
