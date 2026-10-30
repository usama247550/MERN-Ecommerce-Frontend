import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";
import Rating from "./Rating";
import {
  addItemToCart,
  removeError,
  removeMessage,
} from "../features/cart/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { loading, success, message, error } = useSelector(
    (state) => state.cart,
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    if (success && message) {
      toast.success(message, { toastId: "cart" });
      dispatch(removeMessage());
      setAddingId(null);
    }
  }, [dispatch, success, message]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || error);
      dispatch(removeError());
      setAddingId(null);
    }
  }, [dispatch, error]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock <= 0) {
      toast.error("Product is out of stock");
      return;
    }
    setAddingId(product._id);
    dispatch(addItemToCart({ id: product._id, quantity: 1 }));
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  const imageUrl = product.image?.[0]?.url;
  const reviewCount = product.numOfReviews ?? 0;

  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-100 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
      <Link
        to={`/singleProduct/${product._id}`}
        className="relative block overflow-hidden bg-surface-subtle"
      >
        <div className="aspect-square w-full overflow-hidden bg-[#f8f9fb]">
          <img
            src={imageUrl}
            alt={product.name}
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold capitalize tracking-wide text-text-secondary shadow-sm backdrop-blur-sm">
            {product.category}
          </span>
        )}

        <button
          type="button"
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-text-muted shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:text-danger-500"
        >
          {isFavorite ? (
            <HiHeart className="text-lg text-danger-500" />
          ) : (
            <HiOutlineHeart className="text-lg" />
          )}
        </button>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <Link to={`/singleProduct/${product._id}`} className="flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-primary-600 sm:text-[15px]">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-1.5">
            <Rating value={product.rating} disable={true} />
            {reviewCount > 0 && (
              <span className="text-xs text-text-muted">({reviewCount})</span>
            )}
          </div>

          <p className="mt-2 text-lg font-bold text-text-primary sm:text-xl">
            <span className="text-xs font-normal text-text-muted">PKR </span>
            {product.price?.toLocaleString()}
            <span className="text-sm font-normal text-text-muted">/-</span>
          </p>
        </Link>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={loading && addingId === product._id}
          className="btn-primary mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold opacity-90 transition-all duration-200 group-hover:opacity-100 disabled:opacity-60"
        >
          <BsCartPlus className="text-base" />
          {loading && addingId === product._id ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default Product;
