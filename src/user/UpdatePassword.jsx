import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  removeError,
  removeSuccess,
  resetPassword,
} from "../features/user/userSlice.js";
import { toast } from "react-toastify";
import PageTitle from "../component/PageTitle.jsx";
import { Button, FormGroup, Input, Label } from "../ui";

const UpdatePassword = () => {
  const { loading, error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { oldPassword, newPassword, confirmPassword } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = new FormData();
    myData.set("oldPassword", oldPassword);
    myData.set("newPassword", newPassword);
    myData.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(myData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success("Password update successfully", { autoClose: 3000 });
      dispatch(removeSuccess());
      navigate("/login");
    }
  }, [dispatch, navigate, success]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="Update Password" />
          <div className="auth-page">
            <form className="auth-form" onSubmit={handleSubmit}>
              <h2 className="form-title text-center text-2xl font-semibold text-text-primary">
                Change Password
              </h2>

              <FormGroup>
                <Label htmlFor="old-password">Old Password</Label>
                <Input
                  type="password"
                  id="old-password"
                  placeholder="min 6 characters"
                  required
                  name="oldPassword"
                  value={oldPassword}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  type="password"
                  id="new-password"
                  placeholder="min 6 characters"
                  required
                  name="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirm-password"
                  placeholder="min 6 characters"
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </FormGroup>

              <Button type="submit" className="w-full">
                Change Password
              </Button>
            </form>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default UpdatePassword;
