import React from "react";
import { Link } from "react-router-dom";
import { categoryItems } from "../../data/homeMockData";

const CategorySection = ({ products = [] }) => {
  const getCategoryCount = (slug) =>
    products.filter((p) => p.category?.toLowerCase() === slug).length;

  return (
    <section className="bg-surface-muted py-12 sm:py-16">
      <div className="page-container">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
            Browse by Category
          </span>
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-text-secondary sm:text-base">
            Find exactly what you need across our most popular collections.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {categoryItems.map(({ slug, name, description, icon: Icon, image }) => {
            const count = getCategoryCount(slug);
            return (
              <Link
                key={slug}
                to={`/products?category=${slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
              >
                <div className="relative h-28 overflow-hidden sm:h-32">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-sm">
                    <Icon className="text-lg" />
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold capitalize text-text-primary">
                    {name}
                  </h3>
                  <p className="mt-0.5 line-clamp-2 text-xs text-text-muted">
                    {description}
                  </p>
                  {count > 0 && (
                    <p className="mt-2 text-xs font-medium text-primary-600">
                      {count} {count === 1 ? "product" : "products"}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
