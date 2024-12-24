import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { img1, img2, img3, img4, img6, img7 } from '../assets/index';

export default function Section2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-2xl h-auto text-white mt-8 max-xl:relative grid grid-cols-12 gap-4 mt-[80px]">
      <h1 className='col-start-2 col-span-12 text-4xl ml-10 mb-2 font-bold block w-[200px]' data-aos='fade-left'>Collages</h1>
      <div
        className="
        text-center bg-cover bg-center h-[250px] flex items-center justify-center
        xl:col-start-2 xl:col-span-5 
        max-xl:col-start-2 max-xl:col-span-5"
        style={{ backgroundImage: `url(${img6})` }}
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h2 className="text-2xl font-bold bg-black/50 p-2 rounded max-xl:hidden">Design</h2>
      </div>
      <h2 className='hidden max-xl:block max-xl:col-start-9 max-xl:col-span-3 text-4xl font-bold' data-aos='fade-left'>Design</h2>

      <div
        className="
        text-center bg-cover bg-center h-[250px] flex items-center justify-center
        xl:col-start-7 xl:col-span-5
        max-xl:col-start-2 max-xl:col-span-5  
        "
        style={{ backgroundImage: `url(${img1})` }}
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h2 className="text-2xl font-bold bg-black/50 p-2 rounded max-xl:hidden">Dentist</h2>
      </div>
      <h2 className='hidden max-xl:block max-xl:col-start-9 max-xl:col-span-3 text-4xl font-bold' data-aos='fade-left'>Dentist</h2>

      <div
        className="
        text-center col-span-10 bg-cover bg-center h-[250px] flex items-center justify-center
        xl:col-start-2 
        max-xl:col-start-2 max-xl:col-span-5 
        "
        style={{ backgroundImage: `url(${img3})` }}
        data-aos="fade-down"
        data-aos-duration='500'
      >
        <h2 className="text-2xl font-bold bg-black/50 p-2 rounded max-xl:hidden">Engineering</h2>
      </div>
      <h2 className='hidden max-xl:block max-xl:col-start-9 max-xl:col-span-3 text-4xl font-bold' data-aos='fade-left'>Engineering</h2>

      <div
        className="
        text-center bg-cover bg-center h-[250px] flex items-center justify-center
        xl:col-start-2 xl:col-span-5 
        max-xl:col-start-2 max-xl:col-span-5 
        "
        style={{ backgroundImage: `url(${img2})` }}
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h2 className="text-2xl font-bold bg-black/50 p-2 rounded max-xl:hidden">Languages</h2>
      </div>
      <h2 className='hidden max-xl:block max-xl:col-start-9 max-xl:col-span-3 text-4xl font-bold' data-aos='fade-left'>Languages</h2>

      <div
        className="
        text-center bg-cover bg-center h-[250px] flex items-center justify-center
         xl:col-start-7 xl:col-span-5
        max-xl:col-start-2 max-xl:col-span-5 
        "
        style={{ backgroundImage: `url(${img7})` }}
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h2 className="text-2xl font-bold bg-black/50 p-2 rounded max-xl:hidden">Economic</h2>
      </div>
      <h2 className='hidden max-xl:block max-xl:col-start-9 max-xl:col-span-3 text-4xl font-bold' data-aos='fade-left'>Economic</h2>
    </div>
  );
}
