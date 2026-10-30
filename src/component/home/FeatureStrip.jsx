import React from "react";
import { featureStripItems } from "../../data/homeMockData";

const FeatureStrip = () => {
  return (
    <section className="border-y border-border bg-white">
      <div className="page-container py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {featureStripItems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-xl border border-transparent px-3 py-4 text-center transition-all duration-200 hover:border-border hover:bg-surface-muted hover:shadow-sm sm:px-4"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary sm:text-base">
                {title}
              </h3>
              <p className="mt-1 hidden text-xs text-text-muted sm:block">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
