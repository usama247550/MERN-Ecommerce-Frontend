import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Loader from "../component/Loader.jsx";
import { toast } from "react-toastify";
import { removeErrors } from "../features/products/productSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Product from "../component/Product";
import { fetchProducts } from "../features/products/productSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../component/Pagination.jsx";
import PageTitle from "../component/PageTitle.jsx";

const Products = () => {
  const { loading, products, error } = useSelector((state) => state.Products);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  const category = searchParams.get("category");
  const pageFromUrl = parseInt(searchParams.get("page"), 10) || 1;

  const [currPage, setCurrPage] = useState(pageFromUrl);

  useEffect(() => {
    dispatch(fetchProducts({ keyword, page: currPage, category }));
  }, [dispatch, keyword, currPage, category]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);

  const handlePage = (page) => {
    if (page !== currPage) {
      setCurrPage(page);
      const newSearchParams = new URLSearchParams(location.search);
      if (page === 1) {
        newSearchParams.delete("page");
      } else {
        newSearchParams.set("page", page);
      }
      navigate(`?${newSearchParams.toString()}`);
    }
  };

  const handleCategory = (cat) => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("category", cat);
    newSearchParams.delete("page");
    navigate(`?${newSearchParams.toString()}`);
  };

  const categoryArr = ["phone", "laptop", "watch", "women", "men", "bag"];
  return (
    <>
      <PageTitle title={"Products"} />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="page-container flex flex-col gap-6 py-6 sm:py-8 lg:flex-row lg:gap-8">
          <aside className="ui-card w-full shrink-0 lg:w-56 xl:w-64">
            <h3 className="card-heading mb-4 uppercase tracking-wide">
              Category
            </h3>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {categoryArr.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategory(cat)}
                  className="cursor-pointer rounded-lg px-3 py-2 text-left text-sm capitalize text-text-secondary transition-colors hover:bg-surface-subtle hover:text-primary-600"
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-start">
              {products?.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
            <Pagination currPage={currPage} onPageChange={handlePage} />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Products;
