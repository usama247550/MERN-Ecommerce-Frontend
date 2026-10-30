import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBoxOpen,
  FaRegSmile,
  FaShieldAlt,
  FaTags,
} from "react-icons/fa";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import PageTitle from "../component/PageTitle";
import "../css/About.css";

const benefits = [
  {
    icon: FaBoxOpen,
    title: "Quality Products",
    description:
      "Explore a considered selection of products for your everyday needs.",
  },
  {
    icon: FaTags,
    title: "Affordable Prices",
    description:
      "Find great value across the products you need, all in one place.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Shopping",
    description:
      "Shop with confidence through a straightforward, secure experience.",
  },
  {
    icon: FaRegSmile,
    title: "Customer Satisfaction",
    description:
      "We aim to make every step of your shopping experience simple and helpful.",
  },
];

const About = () => (
  <>
    <PageTitle title="About Us | ShopEasy" />
    <Navbar />
    <main className="about-page">
      <section className="about-hero">
        <div className="page-container about-hero__layout">
          <div className="about-hero__copy about-enter">
            <span className="about-eyebrow">A better way to shop</span>
            <h1>
              About <span>ShopEasy</span>
            </h1>
            <p>
              Shopping for what you need should feel easy. ShopEasy brings
              useful products, clear choices, and a convenient online
              experience together in one place.
            </p>
            <Link to="/products" className="about-button">
              Explore products <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="about-hero__visual about-enter" aria-label="ShopEasy product selection">
            <img src="/images/img2.jpg" alt="A selection of products available at ShopEasy" />
            <div className="about-hero__visual-caption">
              <span className="about-hero__caption-icon">
                <FaBoxOpen aria-hidden="true" />
              </span>
              <span>
                <strong>Everything in one place</strong>
                <small>Discover your next favorite</small>
              </span>
            </div>
            <span className="about-hero__visual-accent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="page-container about-story__layout">
          <div className="about-story__visual about-enter">
            <img src="/images/img3.jpg" alt="ShopEasy makes online shopping more convenient" />
            <div className="about-story__visual-mark" aria-hidden="true">
              <FaTags />
            </div>
          </div>
          <div className="about-story__copy about-enter">
            <span className="about-eyebrow">Our story</span>
            <h2>Thoughtful shopping, made simple.</h2>
            <p>
              ShopEasy is built around a simple idea: finding everyday products
              online can be convenient, clear, and enjoyable. We bring a range
              of useful categories together so you can browse and shop in one
              easy-to-use place.
            </p>
            <p>
              From discovering something new to completing your order, we focus
              on keeping the experience straightforward at every step.
            </p>
            <Link to="/products" className="about-text-link">
              Browse the collection <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-purpose">
        <div className="page-container">
          <div className="about-section-heading about-enter">
            <span className="about-eyebrow">What guides us</span>
            <h2>Our mission and vision</h2>
            <p>A clear purpose for every part of your shopping experience.</p>
          </div>
          <div className="about-purpose__grid">
            <article className="about-purpose-card about-enter">
              <span className="about-purpose-card__icon">
                <FaBoxOpen aria-hidden="true" />
              </span>
              <span className="about-purpose-card__label">Our mission</span>
              <h3>Quality within reach.</h3>
              <p>Deliver quality products at affordable prices.</p>
            </article>
            <article className="about-purpose-card about-purpose-card--navy about-enter">
              <span className="about-purpose-card__icon">
                <FaArrowRight aria-hidden="true" />
              </span>
              <span className="about-purpose-card__label">Our vision</span>
              <h3>A destination you can trust.</h3>
              <p>
                Become a trusted and convenient online shopping destination.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-benefits">
        <div className="page-container">
          <div className="about-section-heading about-enter">
            <span className="about-eyebrow">The ShopEasy difference</span>
            <h2>Why choose us</h2>
            <p>Everything you need for a smoother way to shop.</p>
          </div>
          <div className="about-benefits__grid">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article className="about-benefit-card about-enter" key={title}>
                <span className="about-benefit-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="page-container">
          <div className="about-cta__panel about-enter">
            <div>
              <span className="about-eyebrow">Your next find is waiting</span>
              <h2>Make shopping the easy part.</h2>
              <p>Explore the ShopEasy collection and find what you need.</p>
            </div>
            <Link to="/products" className="about-button about-button--light">
              Start exploring <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
