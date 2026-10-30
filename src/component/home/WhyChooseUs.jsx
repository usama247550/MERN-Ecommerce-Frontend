import React from "react";
import { whyChooseUsItems } from "../../data/homeMockData";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="page-container">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
            Why ShopEasy
          </span>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-text-secondary sm:text-base">
            We combine quality, security, and service to deliver a shopping
            experience you can trust.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyChooseUsItems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface-muted p-6 transition-all duration-200 hover:border-primary-200 hover:bg-white hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md shadow-primary-600/20">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
