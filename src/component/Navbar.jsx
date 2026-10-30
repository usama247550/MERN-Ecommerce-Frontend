import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import UserDashboard from "../user/UserDashboard";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact-Us", label: "Contact" },
];

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/products");
    }
    setSearchQuery("");
    closeMenu();
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path) =>
    `relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive(path)
        ? "text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary-400"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <>
      {/* ── Main header ── */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-slate-900/95 shadow-lg shadow-black/30 backdrop-blur-md"
            : "border-white/5 bg-slate-900"
        }`}
      >
        <div className="page-container">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">

            {/* Logo */}
            <Link
              to="/"
              className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-sm font-bold text-white shadow-md shadow-primary-600/40">
                SE
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Shop<span className="text-primary-400">Easy</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className="flex items-center gap-8">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className={navLinkClass(to)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Search */}
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-44 rounded-full border border-white/10 bg-white/8 py-2 pl-4 pr-10 text-sm text-gray-200 outline-none transition-all placeholder:text-gray-500 focus:w-52 focus:border-primary-500/60 focus:bg-white/12 focus:ring-2 focus:ring-primary-500/20 xl:w-52 xl:focus:w-60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Search"
                >
                  <CiSearch className="text-lg" />
                </button>
              </form>

              {/* Auth */}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/8 hover:text-white"
                >
                  <IoPersonOutline className="text-lg" />
                  <span className="hidden xl:inline">Login</span>
                </Link>
              ) : (
                <UserDashboard user={user} />
              )}

              {/* Cart */}
              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/8 hover:text-white"
                aria-label="Cart"
              >
                <BsCart3 className="text-xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-500 px-1 text-[10px] font-bold text-white ring-2 ring-slate-900">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1 lg:hidden">
              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-300"
                aria-label="Cart"
              >
                <BsCart3 className="text-xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-500 px-0.5 text-[10px] font-bold text-white ring-2 ring-slate-900">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300"
                  aria-label="Login"
                >
                  <IoPersonOutline className="text-xl" />
                </Link>
              )}

              {isAuthenticated && <UserDashboard user={user} />}

              <button
                type="button"
                onClick={toggleMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <HiOutlineX className="text-2xl" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-[min(100%,320px)] flex-col bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-lg font-bold text-white">
            Shop<span className="text-primary-400">Easy</span>
          </span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>

        {/* Drawer search */}
        <form className="border-b border-white/10 px-5 py-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-white/10 bg-white/8 py-2.5 pl-4 pr-10 text-sm text-gray-200 outline-none placeholder:text-gray-500 focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              aria-label="Search"
            >
              <CiSearch className="text-lg" />
            </button>
          </div>
        </form>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(to)
                      ? "bg-primary-600/20 text-primary-400"
                      : "text-gray-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {!isAuthenticated && (
            <div className="mt-4 space-y-2 border-t border-white/10 px-1 pt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="btn-primary block w-full text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="block w-full rounded-lg border border-white/20 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-gray-300 transition-colors hover:border-white/40 hover:text-white"
              >
                Create Account
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
