import React from 'react';
import { CheckCircle2, XCircle, ShoppingCart } from 'lucide-react';
import clsx from 'clsx';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../store/cartSlice';

export default function CourseCard ({ course }){
  // const dispatch = useDispatch();
  const isAvailable = course.available_seats > 0 && course.status;

  // const handleAddToCart = () => {
  //   dispatch(addToCart(course));
  // };

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 mb-4 dark:bg-white dark:text-black">
      <div className="flex justify-between items-start">
        <div className='*:text-white dark:*:text-black'>
          <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
          <p className="text-gray-600 mb-1">Building: {course.build_number}</p>
          <p className="text-gray-600 mb-1">Hall: {course.hall_number}</p>
          <p className="text-gray-600 mb-3">
            Available Seats: <span className="font-medium">{course.available_seats}</span>
          </p>
        </div>
        <div className="flex items-center">
          {isAvailable ? (
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          ) : (
            <XCircle className="h-6 w-6 text-red-500" />
          )}
        </div>
      </div>
      
      <button
        // onClick={handleAddToCart}
        disabled={!isAvailable}
        className={clsx(
          "w-full mt-4 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center",
          isAvailable
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-gray-300 cursor-not-allowed text-gray-500"
        )}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Register This Course
      </button>
    </div>
  );
};