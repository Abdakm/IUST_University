import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PersonStanding, Clock, GraduationCap } from 'lucide-react';
import useFetch from '../hooks/useFetch';
import { Certificates, Navbar, OtherDoctors } from './index';
import { useLanguage } from '../contexts/languageContext';

export default function Doctor() {
  const params = useParams();
  const navigate = useNavigate(); // For navigation
  const { data, loading, error } = useFetch(`doctor/${params.id}`);
  const { language } = useLanguage(); // 👈 using language context

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.id])

  if (loading) return <div className="text-gray-800 dark:text-gray-200">Loading...</div>;
  if (error) return <div className="text-red-600 dark:text-red-400">Failed to load data. Please try again.</div>;
  if (!data || data.length === 0) {
    return <div className="text-gray-800 dark:text-gray-200">No doctor information available.</div>;
  }

   // 🔁 Translations
  const t = {
    doctorInfo: language === "AR" ? "معلومات الدكتور" : "Doctor Information",
    gender: language === "AR" ? "الجنس" : "Gender",
    yearsExperience: language === "AR" ? "سنوات الخبرة" : "Years Experience",
    certifications: language === "AR" ? "الشهادات والتعليم" : "Certifications & Education",
    noDoctor: language === "AR" ? "لا توجد معلومات عن هذا الدكتور." : "No doctor information available.",
    loading: language === "AR" ? "جاري التحميل..." : "Loading...",
    error: language === "AR" ? "فشل في تحميل البيانات. حاول مرة أخرى." : "Failed to load data. Please try again.",
    bio: language === "AR"
      ? "للوريم إيبسوم دولور الجلوس أميت، إيليت. ولكن قد يحدث وقت طويل من العمل والألم الكبير. إننا لا نسمح إلا بالحد الأدنى من النشاط الذي نمارسه من خلال العمل، ولا نتركه بعيدًا عن أي شيء يترتب على ذلك."
      : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .",
  };
 
  return (
    <div className="max-w-screen-2xl m-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className={`flex flex-col items-center justify-center max-md:mt-[100px] min-h-[700px]`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Doctor Info */}
            <div className="lg:w-2/3">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400"
                    alt={`Profile of Dr. ${data[0]?.doctor_name || 'Unnamed'}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold mb-2">{data[0].doctor_name}</h1>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">{t.doctorInfo}</p>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                    <PersonStanding className="w-7 h-7 text-blue-500 dark:text-blue-400" />
                    <span>{t.gender}: {data[0].gender}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                      <span>{data[0].years_of_experience}+ {t.yearsExperience}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{t.bio}</p>
                </div>
              </div>
            </div>

            {/* Right Section - Certifications */}
            <div className="lg:w-1/3 lg:border-l lg:pl-8 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">{language === 'AR' ? 'الشهادات والتعليم' : 'Certifications & Education'}</h2>
              </div>
              <Certificates />
            </div>
          </div>
        </div>
      </div>
      <OtherDoctors id={params.id}/>
    </div>
  );
}
