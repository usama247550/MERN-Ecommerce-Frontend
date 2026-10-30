import React, { useState } from "react";
import { toast } from "react-toastify";
import { HiOutlineMail } from "react-icons/hi";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Thanks for subscribing! We'll keep you updated.");
    setEmail("");
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 px-6 py-12 text-center shadow-xl shadow-primary-600/25 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <HiOutlineMail className="mx-auto mb-4 text-4xl text-white/90" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-3 text-sm text-primary-100 sm:text-base">
              Get the latest products, offers, and updates delivered to your
              inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border-0 px-4 py-3 text-sm text-text-primary shadow-sm outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
