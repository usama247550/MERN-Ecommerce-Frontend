import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  removeError,
  removeSuccess,
} from "../features/user/userSlice.js";
import PageTitle from "./PageTitle.jsx";
import { Button, FormGroup, Input, Label } from "../ui";

const Register = () => {
  const { loading, error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvater] = useState("");
  const [previewAvatar, setpreviewAvater] = useState("/images/avatar.jpeg");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvater(reader.result);
          setpreviewAvater(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { name, email, password } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = new FormData();
    myData.set("name", name);
    myData.set("email", email);
    myData.set("password", password);
    myData.set("avatar", avatar);
    dispatch(register(myData));
  };

  useEffect(() => {
    if (error) {
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      dispatch(removeSuccess());
      navigate("/login");
    }
  }, [dispatch, navigate, success]);

  return (
    <>
      <Navbar />
      <PageTitle title="Sign up" />
      <div className="auth-page">
        <form
          className="auth-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h2 className="form-title text-center text-2xl font-semibold text-text-primary">
            Create Account
          </h2>

          <img
            src={previewAvatar}
            alt="Profile preview"
            className="mx-auto h-[70px] w-[70px] rounded-full object-cover"
          />

          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormGroup>

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

          <FormGroup>
            <Label htmlFor="avatar">Upload Image</Label>
            <Input
              type="file"
              id="avatar"
              required
              name="avatar"
              onChange={handleChange}
              accept="image/*"
            />
          </FormGroup>

          <Button type="submit" loading={loading} disabled={loading} className="w-full">
            {loading ? "Sign Up.." : "Sign Up"}
          </Button>

          <p className="small-text text-center">
            Already have an account?{" "}
            <Link className="link-accent" to="/login">
              Sign in here
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
