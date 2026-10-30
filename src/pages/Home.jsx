import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Product from "../component/Product";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice.js";
import { toast } from "react-toastify";
import { removeErrors } from "../features/products/productSlice.js";
import Loader from "../component/Loader.jsx";
import PageTitle from "../component/PageTitle.jsx";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, productsCount, error } = useSelector(
    (state) => state.Products
  );

  useEffect(() => {
    dispatch(fetchProducts({ keyword: "" }));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);
  return (
    <>
      <PageTitle title={"Home"} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <section className="bg-gradient-to-b from-surface-subtle to-white py-12 sm:py-16 lg:py-20">
            <div className="page-container">
              <div className="mb-10 text-center sm:mb-12">
                <h2 className="section-heading inline-block text-2xl font-bold uppercase tracking-widest text-text-primary sm:text-3xl">
                  Trending Now
                </h2>
                <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                  <span className="h-[2px] w-8 rounded-full bg-primary-600"></span>
                  <span className="h-[3px] w-16 rounded-full bg-primary-600"></span>
                  <span className="h-[2px] w-8 rounded-full bg-primary-600"></span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
                {products?.map((product, ind) => (
                  <Product product={product} key={ind} />
                ))}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
