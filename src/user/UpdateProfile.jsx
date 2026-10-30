import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  profileUpdate,
  removeError,
  removeSuccess,
} from "../features/user/userSlice.js";
import { toast } from "react-toastify";
import PageTitle from "../component/PageTitle.jsx";
import { Button, FormGroup, Input, Label } from "../ui";

const UpdateProfile = () => {
  const { user, loading, error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvater] = useState("");
  const [previewAvatar, setpreviewAvater] = useState("/images/avatar.jpeg");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name,
        email: user.email,
      });
      setpreviewAvater(user.avatar?.url || "/images/avatar.jpeg");
    }
  }, [user]);

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
  const { name, email } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = new FormData();
    myData.set("name", name);
    myData.set("email", email);
    myData.set("avatar", avatar);
    dispatch(profileUpdate(myData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success("Profile update successfully", { autoClose: 2000 });
      dispatch(removeSuccess());
      navigate("/profile");
    }
  }, [dispatch, navigate, success]);

  return (
    <>
      <Navbar />
      <PageTitle title="Update Profile" />
      <div className="auth-page">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="form-title text-center text-2xl font-semibold text-text-primary">
            Update Profile
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
              placeholder={user.name}
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
              placeholder={user.email}
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="avatar">Upload Image</Label>
            <Input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleChange}
              accept="image/*"
            />
          </FormGroup>

          <Button type="submit" loading={loading} disabled={loading} className="w-full">
            {loading ? "Updating.." : "Update"}
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfile;
