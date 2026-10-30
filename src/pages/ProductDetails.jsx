import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Rating from "../component/Rating";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createReview,
  fetchSingleProduct,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import Loader from "../component/Loader.jsx";
import {
  removeErrors,
  removeSuccess,
} from "../features/products/productSlice.js";
import {
  removeMessage,
  removeError,
  addItemToCart,
} from "../features/cart/cartSlice.js";
import PageTitle from "../component/PageTitle.jsx";
import { Button, Textarea } from "../ui";

const ProductDetails = () => {
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [productImage, setProductImage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  const { loading, singleProduct, error, reviewLoading, reviewSuccess } =
    useSelector((state) => state.Products);

  const {
    loading: cartLoading,
    error: cartError,
    success,
    message,
    cartItems,
  } = useSelector((state) => state.cart);

  const { name, price, description, numOfReviews, stock, rating, reviews } =
    singleProduct?.product || {};

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(id));
    }
    return () => {
      dispatch(removeErrors());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeErrors());

      if (cartError) {
        toast.error(cartError, { autoClose: 3000 });
        dispatch(removeError());
      }
    }
  }, [dispatch, error, cartError]);

  useEffect(() => {
    if (success) {
      toast.success(message, { autoClose: 3000 });
      dispatch(removeMessage());
    }
  }, [dispatch, success, message]);

  const increaseQuentity = () => {
    if (quantity >= stock) {
      toast.error("cannot exceed available quantity ");
      dispatch(removeErrors());
      return;
    }
    setQuantity((preQuantity) => preQuantity + 1);
  };

  const decreaseQuentity = () => {
    if (quantity <= 1) {
      toast.error("Quantity cannot be less then 1 ");
      dispatch(removeErrors());
      return;
    }
    setQuantity((preQuantity) => preQuantity - 1);
  };

  const addItem = () => {
    dispatch(addItemToCart({ id, quantity }));
    setQuantity(1);
  };

  useEffect(() => {
    if (singleProduct?.product?.image?.length > 0) {
      setProductImage(singleProduct?.product?.image[0].url);
    }
  }, [singleProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userRating) {
      toast.error("Please select rating");
      return;
    }
    dispatch(
      createReview({ rating: userRating, comment: userComment, productId: id })
    );
  };

  useEffect(() => {
    if (reviewSuccess) {
      toast.success("Review Submitted Successfully");
      dispatch(removeSuccess());
      setUserRating(0);
      setUserComment("");
      dispatch(fetchSingleProduct(id));
    }
  }, [dispatch, reviewSuccess, id]);

  return (
    <>
      <PageTitle title={"Product Details"} />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="page-container flex flex-col gap-8 py-6 sm:py-8 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-1/2">
              <div className="ui-card overflow-hidden p-0">
                <img
                  src={productImage}
                  alt={name}
                  className="mx-auto max-h-[50vh] w-full object-contain p-4 lg:max-h-[70vh]"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {singleProduct.product?.image.map((img, ind) => (
                  <button
                    type="button"
                    key={ind}
                    onClick={() => setProductImage(img?.url)}
                    className={`h-16 w-16 overflow-hidden rounded-lg border-2 transition-colors sm:h-20 sm:w-20 ${
                      productImage === img?.url
                        ? "border-primary-600"
                        : "border-border hover:border-primary-500"
                    }`}
                  >
                    <img
                      src={img?.url}
                      alt={`Thumbnail ${ind + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="page-heading mb-3">{name}</h2>
              <p className="body-text mb-4">{description}</p>
              <h4 className="mb-3 text-xl font-semibold text-primary-600">
                Price: {price}/-
              </h4>
              <Rating
                value={rating}
                onRatingChange={handleRatingChange}
                disable={true}
              />
              <p className="small-text mb-3">({`${numOfReviews} Reviews`})</p>
              <h4
                className={`mb-4 text-base font-semibold ${
                  stock > 0 ? "text-success-700" : "text-danger-600"
                }`}
              >
                {stock > 0
                  ? ` In Stock: (${stock} available)`
                  : `Out of Stock`}
              </h4>
              {stock > 0 && (
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <label htmlFor="quantity" className="form-label mb-0">
                    Quantity:
                  </label>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={decreaseQuentity}
                    >
                      -
                    </Button>
                    <input
                      type="text"
                      id="quantity"
                      value={quantity}
                      readOnly
                      className="form-input w-16 text-center"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={increaseQuentity}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    onClick={addItem}
                    disabled={cartLoading}
                    loading={cartLoading}
                    className="w-full sm:w-auto"
                  >
                    {cartLoading ? "Adding" : "Add to Cart"}
                  </Button>
                </div>
              )}

              <h2 className="section-heading mb-3">Write a Review</h2>
              <Rating
                value={userRating}
                onRatingChange={handleRatingChange}
                disable={false}
              />
              <Textarea
                name="review"
                placeholder="Write your review here"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                className="mt-3"
              />
              <Button
                type="button"
                className="mt-3"
                onClick={handleSubmit}
                loading={reviewLoading}
                disabled={reviewLoading}
              >
                Submit Review
              </Button>
            </div>
          </div>

          <div className="page-container pb-10">
            <h3 className="section-heading mb-6">Customer Reviews</h3>
            {reviews?.length < 1 ? (
              <p className="body-text">Not review yet</p>
            ) : (
              <div className="space-y-4">
                {reviews?.map((review) => (
                  <div className="ui-card" key={review._id}>
                    <h5 className="mb-1 font-semibold text-text-primary">
                      {review.name}
                    </h5>
                    <Rating
                      value={review.rating}
                      onRatingChange={handleRatingChange}
                      disable={true}
                    />
                    <p className="body-text mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
