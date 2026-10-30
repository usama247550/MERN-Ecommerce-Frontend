import {
  FaTruck,
  FaShieldAlt,
  FaAward,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineComputerDesktop,
  HiOutlineClock,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { GiClothes, GiSuitcase } from "react-icons/gi";

export const featureStripItems = [
  {
    icon: FaTruck,
    title: "Fast Shipping",
    description: "Quick delivery on every order",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Payments",
    description: "Safe & encrypted checkout",
  },
  {
    icon: FaAward,
    title: "Quality Products",
    description: "Curated items you can trust",
  },
  {
    icon: FaUndo,
    title: "Easy Returns",
    description: "Hassle-free return policy",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "We're here to help anytime",
  },
];

export const categoryItems = [
  {
    slug: "phone",
    name: "Phones",
    description: "Latest smartphones & gadgets",
    icon: HiOutlineDevicePhoneMobile,
    image: "/images/img1.jpg",
  },
  {
    slug: "laptop",
    name: "Laptops",
    description: "Powerful machines for work & play",
    icon: HiOutlineComputerDesktop,
    image: "/images/img2.jpg",
  },
  {
    slug: "watch",
    name: "Watches",
    description: "Stylish timepieces for every look",
    icon: HiOutlineClock,
    image: "/images/img3.jpg",
  },
  {
    slug: "women",
    name: "Women",
    description: "Fashion & accessories for her",
    icon: GiClothes,
    image: "/images/img1.jpg",
  },
  {
    slug: "men",
    name: "Men",
    description: "Trendy apparel & essentials",
    icon: GiClothes,
    image: "/images/img2.jpg",
  },
  {
    slug: "bag",
    name: "Bags",
    description: "Bags for travel & everyday use",
    icon: GiSuitcase,
    image: "/images/img3.jpg",
  },
];

export const whyChooseUsItems = [
  {
    icon: FaAward,
    title: "Quality Products",
    description:
      "Every item is selected for durability, value, and customer satisfaction.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Checkout",
    description:
      "Shop with confidence using encrypted payments and protected transactions.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description:
      "Reliable shipping so your orders arrive quickly and in great condition.",
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    description:
      "Friendly support team ready to help with orders, returns, and questions.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    rating: 5,
    review:
      "Amazing quality and fast delivery! ShopEasy has become my go-to store for electronics and fashion.",
    initial: "S",
  },
  {
    id: 2,
    name: "Ali Khan",
    rating: 5,
    review:
      "Great prices, smooth checkout, and the product exactly matched the description. Highly recommended.",
    initial: "A",
  },
  {
    id: 3,
    name: "Fatima Noor",
    rating: 4,
    review:
      "Love the variety of products. Customer support was helpful when I had a question about my order.",
    initial: "F",
  },
];
