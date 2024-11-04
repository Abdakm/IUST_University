import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaBook } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
const Information = () => {

  useGSAP(() => {
    const tl = gsap.timeline({defaults:{duration: 1, opacity: 0}});
      tl.fromTo('.link', 
      {
        y: 100,
        opacity: 0
      }, 
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.link',  
          start: "top 80%",  
          end: "top 40%", 
          scrub: true,
          toggleActions: "play none none restart"  
        }
      }
    );
  });
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly gap-6 py-6 max-w-screen-2xl">
        <Link className="link relative max-w-sm p-6 border border-gray-200 rounded-lg shadow w-[300px] h-[300px] flex items-center justify-center *:text-primary hover:bg-primary *:hover:text-white transition-all duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight"><FaBook className="text-7xl hover:duration-300 border-gray-200"/></h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        </Link> 
        <Link className="link max-w-sm p-6 border border-gray-200 rounded-lg shadow w-[300px] h-[300px] flex items-center justify-center *:text-primary hover:bg-primary *:hover:text-white transition-all duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight"><FaPaperPlane className="text-7xl hover:duration-300 border-gray-200"/></h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        </Link> 
        <Link className="link max-w-sm p-6 border border-gray-200 rounded-lg shadow w-[300px] h-[300px] flex items-center justify-center *:text-primary hover:bg-primary *:hover:text-white transition-all duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight"><FaUserDoctor className="text-7xl hover:duration-300 border-gray-200"/></h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        </Link> 
    </section>
  );
};

export default Information;
