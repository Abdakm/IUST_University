import React from 'react';
import CourseCard from './CourseCard';

export default function CourseList({ courses }){
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id_available_material}
          course={course}
        />
      ))}
    </div>
  );
};