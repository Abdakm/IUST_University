import React, { useContext } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import translations from "../constants/translations";
import { useLanguage } from "../contexts/languageContext";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4">
      <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" />
            <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">
              {t.university}
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">{t.about}</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">{t.privacy}</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">{t.licensing}</a>
            </li>
            <li>
              <a href="#" className="hover:underline">{t.contact}</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {t.phone} - {t.address}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
