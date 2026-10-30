import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
import PageTitle from "../component/PageTitle";
import { Button } from "../ui";

const Cart = () => {
  const { cartItems, loading } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, items) => {
    return acc + items.price * items.quantity;
  }, 0);
  const tax = subtotal * 0.05;
  const shipping = subtotal < 1000 ? 0 : 500;
  const total = subtotal + tax + shipping;

  const goToCheckout = () => {
    if (isAuthenticated) {
      navigate("/shipping");
    } else {
      navigate(`/login?redirect=/shipping`);
    }
  };

  return (
    <>
      <PageTitle title="Cart" />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          {cartItems.length === 0 ? (
            <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-16 text-center">
              <h2 className="section-heading">Your cart is empty</h2>
              <Link to="/products">
                <Button>View products</Button>
              </Link>
            </div>
          ) : (
            <div className="page-container py-6 sm:py-8">
              <h1 className="page-heading mb-8">Shopping Cart</h1>

              <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row">
                <div className="min-w-0 flex-1">
                  <div className="bg-white rounded-xl border border-border shadow-sm overflow-x-auto">
                    <table className="w-full min-w-[600px] text-sm sm:text-base">
                      <thead className="bg-surface border-b border-border">
                        <tr>
                          <th className="px-4 py-4 text-left font-semibold text-text-primary">
                            Product
                          </th>
                          <th className="px-4 py-4 text-left font-semibold text-text-primary">
                            Quantity
                          </th>
                          <th className="px-4 py-4 text-left font-semibold text-text-primary">
                            Price
                          </th>
                          <th className="px-4 py-4 text-left font-semibold text-text-primary">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems &&
                          cartItems.map((item) => (
                            <CartItems item={item} key={item.name} />
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="lg:w-80 lg:shrink-0">
                  <div className="ui-card sticky top-24 bg-white border border-border rounded-xl">
                    <h2 className="card-heading mb-4 text-lg font-semibold text-text-primary">
                      Order Summary
                    </h2>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Subtotal</span>
                        <span className="font-medium text-text-primary">
                          PKR {subtotal.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Tax (5%)</span>
                        <span className="font-medium text-text-primary">
                          PKR {tax.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Shipping</span>
                        <span className="font-medium text-text-primary">
                          {shipping === 0 ? (
                            <span className="text-success-600">Free</span>
                          ) : (
                            `PKR ${shipping.toLocaleString()}`
                          )}
                        </span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="font-semibold text-text-primary">
                          Total
                        </span>
                        <span className="text-lg font-bold text-primary-600">
                          PKR {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full" onClick={goToCheckout}>
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;
