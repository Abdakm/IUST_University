import React, { useRef } from "react";
import { img4 } from "../assets";
import { useLanguage } from "../contexts/languageContext";
import translations from "../constants/translations";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function Section1() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

      gsap.to("h1.test", {
        text: t.miracleText,
        duration: 3,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "h1.test",
          start: "center center",
          end: "bottom -800px",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        "#image",
        { opacity: 0, borderRadius: "50%" },
        {
          opacity: 1,
          borderRadius: "2%",
          scrollTrigger: {
            trigger: "#image",
            start: "center center",
            end: "bottom -400px",
            pin: true,
            scrub: 1,
          },
        }
      );
    },
    [] // ✅ Local-only cleanup!
  );

  return (
    <div
      ref={ref}
      className={`max-w-screen-2xl text-white mt-8 h-[1400px] max-xl:relative grid grid-cols-1 xl:grid-cols-2 ${
        language === "AR" ? "text-right" : "text-left"
      }`}
    >
      <div className="z-10">
        <h1 className="test text-4xl font-bold scale-50 text-center"></h1>
      </div>
      <div
        id="image"
        className="bg-cover bg-center bg-no-repeat h-[450px] max-xl:h-[200px] w-[90%] max-xl:absolute max-xl:top-0 max-xl:right-1/2 max-xl:translate-x-1/2"
        style={{ backgroundImage: `url(${img4})` }}
      ></div>
    </div>
  );
}
