import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeSuccess, userLogout } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserDashboard = ({ user }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => setShowOptions(!showOptions);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orders = () => {
    navigate("/user/order");
  };
  const account = () => {
    navigate("/profile");
  };
  const logout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => {
        toast.success("Logout successful");
        dispatch(removeSuccess());
        navigate("/login");
      })
      .catch((error) => {
        toast.success(error.message || "Logout failed");
      });
  };

  const adminDashboard = () => {
    navigate("/admin/dashboard");
  };

  const options = [
    { name: "My Orders", func: orders },
    { name: "Profile", func: account },
    { name: "Logout", func: logout },
  ];
  if (user?.role === "admin") {
    options.unshift({ name: "Admin Dashboard", func: adminDashboard });
  }
  return (
    <div className="relative cursor-pointer" onClick={toggleMenu}>
      <div className="flex items-center gap-2">
        <img
          src={user?.avatar?.url || "/images/avatar.png"}
          alt={user?.name || "User"}
          className="h-8 w-8 rounded-full border border-white/20 object-cover"
        />
        <p className="hidden max-w-[100px] truncate text-sm font-medium text-white sm:block">
          {user?.name || "User"}
        </p>
      </div>
      {showOptions && (
        <div className="animate-fade-in absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-lg border border-border bg-text-primary py-1 shadow-[var(--shadow-dropdown)]">
          {options.map((value, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                value.func();
              }}
              className="block w-full px-4 py-2.5 text-left text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              {value.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
