import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import { useStore } from "../contexts/userContext";
import Hero from "./Hero";
const Home = () => {
  const { user } = useStore();
  console.log(user);
  return (
    <div className="max-w-screen-2xl m-auto">
      <Navbar />
      <Hero />
      {/* About Section */}
      <section className="py-20 bg-gray-100 text-gray-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            Our university has a long history of academic excellence and
            community service. We offer a range of programs and degrees designed
            to equip students for success in today’s global society.
          </p>
          <Link to="/about" className="text-blue-600 hover:underline">
            Learn more
          </Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white text-gray-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
          <p className="text-lg mb-4">
            We offer undergraduate and postgraduate programs across various
            disciplines. Explore our courses to find the perfect fit for your
            career goals.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <Link
              to="/programs/undergraduate"
              className="text-blue-600 hover:underline">
              Undergraduate
            </Link>
            <Link
              to="/programs/postgraduate"
              className="text-blue-600 hover:underline">
              Postgraduate
            </Link>
            <Link
              to="/programs/online"
              className="text-blue-600 hover:underline">
              Online Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100 text-gray-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-4">
            Have questions? Our admissions team is here to help you with any
            inquiries you may have.
          </p>
          <Link to="/contact" className="text-blue-600 hover:underline">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
