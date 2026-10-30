import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";
import Loader from "../component/Loader";
import PageTitle from "../component/PageTitle.jsx";
import { Button } from "../ui";

const UserProfile = () => {
  const { user, loading } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="My Profile" />
          <div className="auth-page">
            <div className="auth-form items-center text-center">
              <img
                src={user?.avatar?.url || "/images/avatar.jpeg"}
                alt={user?.name}
                className="h-[120px] w-[120px] rounded-full border-4 border-primary-100 object-cover"
              />
              <Link to="/profile/update">
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </Link>
              <div className="w-full space-y-1">
                <h2 className="text-xl font-semibold text-text-primary">
                  {user?.name}
                </h2>
                <p className="body-text">{user?.email}</p>
                <span className="small-text">
                  Joined on {String(user?.createdAt).substring(0, 10)}
                </span>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <Link to="/user/order" className="flex-1">
                  <Button variant="secondary" className="w-full">
                    My Orders
                  </Button>
                </Link>
                <Link to="/password/update" className="flex-1">
                  <Button variant="secondary" className="w-full">
                    Change Password
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};
export default UserProfile;
