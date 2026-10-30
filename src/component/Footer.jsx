import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact-Us", label: "Contact" },
  ];

  const serviceLinks = [
    { to: "/user/order", label: "My Orders" },
    { to: "/products", label: "Shop" },
    { to: "/contact-Us", label: "Support" },
    { to: "/login", label: "Account" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaLinkedin, label: "LinkedIn" },
    { icon: FaYoutube, label: "YouTube" },
    { icon: FaGithub, label: "GitHub" },
  ];

  return (
    <footer className="mt-auto w-full overflow-x-hidden bg-[#0f172a] text-white">
      <div className="page-container py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-sm font-bold text-white shadow-md">
                SE
              </span>
              <span className="text-xl font-bold tracking-tight">
                Shop<span className="text-primary-500">Easy</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Your trusted destination for quality products at great prices.
              Shop smarter with ShopEasy.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[.08] text-gray-400 transition-all duration-250 hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:shadow-primary-600/25"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-block text-sm text-gray-400 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Customer Service
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-block text-sm text-gray-400 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MdLocationOn className="mt-0.5 shrink-0 text-base text-primary-500" />
                <span>123 Commerce Street, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="shrink-0 text-sm text-primary-500" />
                <span>+92 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdEmail className="shrink-0 text-base text-primary-500" />
                <span>support@shopeasy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-container flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="#" className="transition-colors duration-200 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
