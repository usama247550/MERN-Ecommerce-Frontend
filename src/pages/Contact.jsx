import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHeadset, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import PageTitle from "../component/PageTitle";
import "../css/Contact.css";

const contactDetails = [
  {
    icon: MdEmail,
    title: "Email Support",
    value: "support@shopeasy.com",
    href: "mailto:support@shopeasy.com",
    detail: "For questions and assistance",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone Support",
    value: "+92 123 456 7890",
    href: "tel:+921234567890",
    detail: "Speak with the ShopEasy team",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    value: "123 Commerce Street, Karachi, Pakistan",
    detail: "Karachi, Pakistan",
  },
];

const Contact = () => (
  <>
    <PageTitle title="Contact Us | ShopEasy" />
    <Navbar />
    <main className="contact-page">
      <section className="contact-hero">
        <div className="page-container contact-hero__inner">
          <span className="contact-eyebrow">We’re here to help</span>
          <h1>Get in Touch</h1>
          <p>
            We&apos;d love to hear from you. Contact our team for any questions
            or assistance.
          </p>
          <div className="contact-hero__decoration" aria-hidden="true">
            <FaHeadset />
          </div>
        </div>
      </section>

      <section className="page-container contact-content">
        <div className="contact-info-grid">
          {contactDetails.map(({ icon: Icon, title, value, href, detail }) => (
            <article className="contact-info-card contact-enter" key={title}>
              <span className="contact-info-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h2>{title}</h2>
                {href ? (
                  <a href={href}>{value}</a>
                ) : (
                  <p className="contact-info-card__value">{value}</p>
                )}
                <p className="contact-info-card__detail">{detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-main-grid">
          <section className="contact-form-card contact-enter" aria-labelledby="contact-form-heading">
            <div className="contact-form-card__heading">
              <span className="contact-eyebrow">Send us a message</span>
              <h2 id="contact-form-heading">How can we help?</h2>
              <p>Fill in the details below and we’ll be glad to hear from you.</p>
            </div>
            <div className="contact-form">
              <div className="contact-form__row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What can we help you with?"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us a little more..."
                  rows="5"
                />
              </div>
              <button className="contact-submit" type="button" disabled>
                Send Message <FaArrowRight aria-hidden="true" />
              </button>
              <p className="contact-form__note">
                Contact form submissions are not available yet. Please use the
                email or phone details above to reach us.
              </p>
            </div>
          </section>

          <aside className="contact-support contact-enter">
            <span className="contact-support__icon">
              <FaHeadset aria-hidden="true" />
            </span>
            <span className="contact-eyebrow">Customer support</span>
            <h2>Need help with a product or order?</h2>
            <p>
              Whether you’re browsing or checking on an order, we’re here to
              help make your ShopEasy experience straightforward.
            </p>
            <div className="contact-support__links">
              <Link to="/products">
                Explore products <FaArrowRight aria-hidden="true" />
              </Link>
              <Link to="/user/order">
                View your orders <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="contact-support__accent" aria-hidden="true" />
          </aside>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
