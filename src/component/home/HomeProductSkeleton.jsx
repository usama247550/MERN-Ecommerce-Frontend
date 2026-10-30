import React from "react";

const ProductSkeleton = () => (
  <div className="animate-pulse overflow-hidden rounded-2xl border border-border bg-white">
    <div className="aspect-square bg-surface-subtle" />
    <div className="space-y-3 p-4">
      <div className="h-4 w-3/4 rounded bg-surface-subtle" />
      <div className="h-3 w-1/2 rounded bg-surface-subtle" />
      <div className="h-5 w-1/3 rounded bg-surface-subtle" />
      <div className="h-9 w-full rounded-lg bg-surface-subtle" />
    </div>
  </div>
);

const HomeProductSkeleton = ({ count = 8 }) => (
  <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: count }).map((_, i) => (
      <ProductSkeleton key={i} />
    ))}
  </div>
);

export default HomeProductSkeleton;
