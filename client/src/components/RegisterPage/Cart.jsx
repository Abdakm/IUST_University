import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, X } from 'lucide-react';
// import { removeFromCart } from '../store/cartSlice';
// import { registerCourses } from '../store/coursesSlice';

export default function Cart(){
  // const dispatch = useDispatch();
  // const cartItems = useSelector(state => state.cart.items);

  // const handleRemoveFromCart = (courseId) => {
    // dispatch(removeFromCart(courseId));
  // };

  // const handleSubmit = () => {
  //   const courseIds = cartItems.map(course => course.id_available_material);
  //   dispatch(registerCourses(courseIds));
  // };

  const cartItems = [
  
  ]

  return (
    <div className="absolute bottom-0 right-0 m-4 w-96 bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Selected Courses ({'cartItems.length'})
        </h3>
      </div>
      
      <div className="max-h-60 overflow-y-auto mb-4">
        {cartItems.map((course) => (
          <div key={course.id_available_material} className="flex justify-between items-center p-2 border-b">
            <span>{course.name}</span>
            <button
              // onClick={() => handleRemoveFromCart(course.id_available_material)}
              className="text-red-500 hover:text-red-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <button
        // onClick={handleSubmit}
        disabled={cartItems.length === 0}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
      >
        Register All Courses
      </button>
    </div>
  );
};