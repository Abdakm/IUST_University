import { useParams } from 'react-router-dom'
import { PersonStanding , Award, Clock, CheckCircle, GraduationCap } from 'lucide-react';
import useFetch from '../hooks/useFetch'
import { Certificates, Navbar } from './index'

export default function Doctor() {
  const params = useParams();
  const { data, loading, error } = useFetch(`doctor/${params.id}`);


  if (!data) return <div className="text-gray-800 dark:text-gray-200">Loading...</div>;

  return (
    <div className="max-w-screen-2xl m-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className={`flex items-center justify-center max-md:mt-[100px]`} style={{ minHeight: 'calc(100vh)' }}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Doctor Info */}
            <div className="lg:w-2/3">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400"
                    alt={data[0].doctor_name}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold mb-2">{data[0].doctor_name}</h1>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">Doctor Information</p>

                  <div className="flex items-center gap-2 right-2 relative text-gray-600 dark:text-gray-300 mb-4">
                    <PersonStanding className="w-7 h-7 text-blue-500 dark:text-blue-400" />
                    <span>Gender: {data[0].gender}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                      <span>{data[0].years_of_experience}+ Years Experience</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Certifications */}
            <div className="lg:w-1/3 lg:border-l lg:pl-8 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold">Certifications & Education</h2>
              </div>
              <Certificates />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
