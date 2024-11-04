import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        opacity: 0,
        ease: 'power2.out'
      } 
    });

    tl.from('.hero-title', { y: -50 })
      .from('.hero-text', { y: 30 }, '-=0.5')
      .from('#login-button', { scale: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2')
      .from('#logo', { x: -250, rotate: -300 }, '-=0.5') 
    
      gsap.to('#logo', {
            scale: 0.9,
            yoyo: true,
            repeat: -1,  
            duration: 1,  
            ease: 'power1.inOut',
            delay: tl.duration() // Start after the initial timeline completes
          })
    });
  return (
    <section className="bg-primary">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="hero-title max-w-2xl text-white mb-4 text-4xl uppercase font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            international university for science & technology
          </h1>
          <p className="hero-text capitalize max-w-2xl text-secondary mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Link
            id="login-button"
            to={"/login"}
            className="inline-flex hover:duration-500 text-white bg-secondary/80 items-center justify-center px-6 py-3 text-base font-medium text-center rounded-lg hover:bg-secondary/50 focus:ring-4">
            Login
          </Link>
        </div>
        <div id='logo' className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={logo} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
