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
import "../css/Products.css";
import "../css/Product.css";

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
      <main className="products-page">
        {loading ? (
          <Loader />
        ) : (
          <div className="page-container products-layout">
            <aside className="products-sidebar">
              <h2 className="products-sidebar__heading">Categories</h2>
              <div className="products-categories">
                {categoryArr.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategory(cat)}
                    aria-pressed={category === cat}
                    className={`products-category${category === cat ? " is-active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </aside>
            <section className="products-listing">
              <div className="products-listing__heading">
                <h1>Explore Products</h1>
              </div>
              <div className="products-grid">
                {products?.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
              </div>
              <Pagination currPage={currPage} onPageChange={handlePage} />
            </section>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Products;
