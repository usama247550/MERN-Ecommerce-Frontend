import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product";

const ProductSection = ({
  eyebrow,
  title,
  description,
  products = [],
  viewAllLink = "/products",
  variant = "default",
  emptyMessage = "No products available at the moment.",
}) => {
  const isCompact = variant === "compact";

  return (
    <section
      className={`py-12 sm:py-16 ${isCompact ? "bg-surface-muted" : "bg-white"}`}
    >
      <div className="page-container">
        <div
          className={`mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between ${
            isCompact ? "sm:items-center" : ""
          }`}
        >
          <div className={isCompact ? "max-w-2xl" : ""}>
            {eyebrow && (
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-2 max-w-xl text-sm text-text-secondary sm:text-base">
                {description}
              </p>
            )}
          </div>
          <Link
            to={viewAllLink}
            className="btn-outline shrink-0 self-start sm:self-auto"
          >
            View All Products
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
            <p className="text-base font-medium text-text-secondary">
              {emptyMessage}
            </p>
            <Link to="/products" className="btn-primary mt-4 inline-flex">
              Browse Products
            </Link>
          </div>
        ) : (
          <div
            className={
              isCompact
                ? "flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 md:grid-cols-3 lg:grid-cols-4 sm:gap-6"
                : "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
            }
          >
            {products.map((product) => (
              <div
                key={product._id}
                className={isCompact ? "min-w-[240px] snap-start sm:min-w-0" : ""}
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
