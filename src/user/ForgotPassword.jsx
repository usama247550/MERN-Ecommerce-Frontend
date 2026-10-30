import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPassword,
  removeError,
  removeSuccess,
} from "../features/user/userSlice.js";
import { toast } from "react-toastify";
import PageTitle from "../component/PageTitle.jsx";
import { Button, FormGroup, Input, Label } from "../ui";

const ForgotPassword = () => {
  const { loading, error, success, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = new FormData();
    myData.set("email", userEmail);
    dispatch(forgotPassword(myData));
    setUserEmail("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success(message, { autoClose: 3000 });
      dispatch(removeSuccess());
    }
  }, [dispatch, success, message]);

  return (
    <>
      <Navbar />
      <PageTitle title="Forgot Password" />
      <div className="auth-page">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="form-title text-center text-2xl font-semibold text-text-primary">
            Forgot Password
          </h2>

          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              required
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </FormGroup>

          <Button type="submit" loading={loading} disabled={loading} className="w-full">
            {loading ? "Sending.." : "Send"}
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
