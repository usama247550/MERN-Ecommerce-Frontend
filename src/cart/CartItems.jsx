import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart, removeItem } from "../features/cart/cartSlice";
import { removeError, removeMessage } from "../features/cart/cartSlice";

const CartItems = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { loading, success, message, error } = useSelector(
    (state) => state.cart,
  );

  const dispatch = useDispatch();

  const increaseQuentity = () => {
    if (quantity >= item.stock) {
      toast.error("cannot exceed available quantity ");
      dispatch(removeError());
      return;
    }
    setQuantity((preQuantity) => preQuantity + 1);
  };

  const decreaseQuentity = () => {
    if (quantity <= 1) {
      toast.error("Quantity cannot be less then 1 ");
      dispatch(removeError());
      return;
    }
    setQuantity((preQuantity) => preQuantity - 1);
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success(message, { toastId: "cart" });
      dispatch(removeMessage());
    }
  }, [dispatch, success, message]);

  const updateQuantity = () => {
    if (loading) return;
    if (item.quantity !== quantity) {
      dispatch(addItemToCart({ id: item.productId, quantity }));
    }
  };

  const removeItemFromCart = () => {
    if (loading) return;
    dispatch(removeItem({ id: item.productId }));
    toast.success("Item remove from cart");
  };
  return (
    <tr className="border-b border-border hover:bg-surface-subtle transition-colors">
      <td className="py-4">
        <div className="flex gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-20 w-20 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-text-primary text-sm sm:text-base">
              {item.name}
            </h3>
            <p className="text-sm text-text-muted">
              PKR {item.price.toFixed(2)}
            </p>
          </div>
        </div>
      </td>

      <td className="py-4">
        <div className="flex items-center gap-2 bg-surface rounded-lg w-fit px-2 py-1">
          <button
            onClick={decreaseQuentity}
            className="p-1 hover:bg-border rounded transition-colors"
          >
            <FaMinus size={12} className="text-text-muted" />
          </button>
          <span className="w-8 text-center font-semibold text-text-primary">
            {quantity}
          </span>
          <button
            onClick={increaseQuentity}
            className="p-1 hover:bg-border rounded transition-colors"
          >
            <FaPlus size={12} className="text-text-muted" />
          </button>
        </div>
      </td>

      <td className="py-4">
        <span className="font-semibold text-text-primary">
          PKR {(item.price * quantity).toLocaleString()}
        </span>
      </td>

      <td className="py-4">
        <div className="flex gap-2">
          <button
            onClick={updateQuantity}
            disabled={loading || quantity === item.quantity}
            className="px-3 py-1 bg-text-secondary text-white rounded-lg text-sm font-medium hover:bg-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Update
          </button>
          <button
            onClick={removeItemFromCart}
            className="px-3 py-1 bg-danger-500 text-white rounded-lg text-sm font-medium hover:bg-danger-600 transition-colors flex items-center gap-1"
          >
            <FaTrash size={12} />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItems;
