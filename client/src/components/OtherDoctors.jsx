import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Cookies from 'js-cookie';

export default function OtherDoctors({ id }) {

  const sub_dep_id = Cookies.get('sub_dep_id')

  const { data, error, loading } = useFetch(`otherdoctor/${sub_dep_id}/${id}`);
  const navigate = useNavigate(); // For programmatic navigation

  const handleDirectNavigation = (doctorId) => {
    navigate(`/doctor/${doctorId}`, { replace: true });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  if (!data || data.length === 0) return <div>No other doctors available</div>;

  return (
    <div className="rounded-lg shadow-xl p-8 max-w-6xl grid grid-cols-2 gap-6 mx-auto relative xl:bottom-[150px] md:bottom-[50px]">
      {data.map((doctor) => (
        <div
          key={doctor.doctor_id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg flex gap-4 transition"
        >
          <div className="xl:w-1/3">
            <img
              src={`https://via.placeholder.com/150?text=${doctor.doctor_name.split(" ")[1]}`}
              alt={doctor.doctor_name}
              className="w-full h-full xl:h-auto rounded-lg object-cover"
            />
          </div>

          {/* Doctor Information */}
          <div className="w-2/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {doctor.doctor_name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                Office: {doctor.office_location}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                Experience: {doctor.years_of_experience} years
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Gender: {doctor.gender}
              </p>
            </div>

            {/* Navigate Button */}
            <button
              onClick={() => handleDirectNavigation(doctor.doctor_id)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              {doctor.doctor_name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
