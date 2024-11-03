import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);
const Hero = () => {
  return (
    <section className="bg-primary dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl text-white mb-4 text-4xl uppercase font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            international university for science & technology
          </h1>
          <p className="max-w-2xl text-secondary mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Link
            to={"/login"}
            className="inline-flex text-primary bg-secondary/80 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Login
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={logo} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
