import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  removeError,
  removeSuccess,
} from "../features/user/userSlice.js";
import { toast } from "react-toastify";
import PageTitle from "./PageTitle.jsx";
import { Button, FormGroup, Input, Label } from "../ui";

const Login = () => {
  const { loading, error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success("Login successfully", { autoClose: 3000 });
      dispatch(removeSuccess());
      navigate(redirect);
    }
  }, [dispatch, navigate, success, redirect]);

  const { email, password } = userInfo;

  return (
    <>
      <Navbar />
      <PageTitle title="Login" />
      <div className="auth-page">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="form-title text-center text-2xl font-semibold text-text-primary">
            Login
          </h2>

          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Min 6 characters"
              required
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormGroup>

          <Button type="submit" loading={loading} disabled={loading} className="w-full">
            {loading ? "Sign In.." : "Sign In"}
          </Button>

          <p className="small-text text-center">
            Don't have an account?{" "}
            <Link className="link-accent" to="/register">
              Sign up here
            </Link>
          </p>
          <p className="small-text text-center">
            Forgot your password?{" "}
            <Link className="link-accent" to="/password/forgot">
              Reset here
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
