import { logo } from "../assets";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Information = () => {
  useGSAP(() => {
    const tl = gsap.timeline({defaults: { duration: 1, opacity: 0, ease: 'power2.out' }});

    tl.from("#hero-title", { 
      y: -50,
      scrollTrigger: {
        trigger: '#hero-title',
        start: 'top bottom',
        end: 'top 20%',
        toggleActions: 'play none none none',
        scrub: 1,
      }})
      .from("#hero-text", { 
      y: 30,
      scrollTrigger: {
        trigger: '#hero-text',
        start: 'top bottom',
        end: 'top 20%',
        toggleActions: 'play none none none',
        scrub: 1
      }}, "-=0.2")
      .from("#logo1", {
      x: -250,
      rotate: -300,
      scrollTrigger: {
        trigger: '#logo1',
        start: 'top bottom',
        end: 'top 20%',
        toggleActions: 'play none none none',
        scrub: 1
      }}, "-=0.2");  

  }, []);

  return (
    <section className="bg-primary">
      <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
          <img src={logo}  id="logo1" />
        </div>
        <div className="w-full h-full text-white m-auto lg:col-span-8">
          <h1 id="hero-title" className=" max-w-2xl m-auto text-right mb-7 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            نبذة عن الجامعة
          </h1>
          <p id="hero-text" className=" max-w-2xl m-auto mb-6 text-right text-gray-800 font-bold lg:mb-8 md:text-lg lg:text-2xl">
            تقدم كليات IUST الست أعلى جودة ممكنة من البرامج والدورات والتخصصات التي تتحدى الطلاب بفرص التعلم التفاعلية على جميع المستويات. يتم دمج أحدث التقنيات وتقنيات ووحدات التعلم الإلكتروني والمكتبة الإلكترونية / المكتبة الافتراضية وقواعد البيانات على الإنترنت ، فضلاً عن تقنيات المعلومات والاتصالات (ICT) في المناهج الدراسية اليومية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information;
