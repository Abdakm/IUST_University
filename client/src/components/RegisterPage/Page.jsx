import React, { useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';

import CourseList from './CourseList';
import Cart from './Cart';
import LoadingSpinner from './LoadingSpinner';

import axios from 'axios'
import useFetch from '../../hooks/useFetch'
import { Navbar } from '../index'
import { Toaster } from 'react-hot-toast';

import { Provider, useSelector, useDispatch } from 'react-redux';
// import { fetchCourses } from './store/coursesSlice';

import { useLanguage } from "../../contexts/languageContext";


export default function Page (){
  const dispatch = useDispatch();
  const { language } = useLanguage();
  // const { items: courses, loading, error } = useSelector(state => state.courses);

  // useEffect(() => {
  //   dispatch(fetchCourses());
  // }, [dispatch]);

  const { data, loading, error } = useFetch('registration')

  if (!data) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="max-w-screen-2xl m-auto mt-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 relative" style={{ minHeight: 'calc(100vh - 84px)' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {language === 'EN' ? 'Course Registration' : 'تسجيل الدورة'}
        </h1>
        <CourseList courses={data} />
      <Cart />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};