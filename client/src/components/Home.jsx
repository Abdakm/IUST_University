import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import { useStore } from "../contexts/userContext";
import Hero from "./Hero";
import Information from "./Information"
import About from './About'
import Footer from './Footer'
const Home = () => {
  const { user } = useStore();
  console.log(user);
  return (
    <div className="max-w-screen-2xl m-auto">
      <Navbar />
      <Hero />
      <Information />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
