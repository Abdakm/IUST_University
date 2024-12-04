import { useParams } from 'react-router-dom'
import { MapPin, Award, Clock, CheckCircle, GraduationCap } from 'lucide-react';
import useFetch from '../hooks/useFetch'

export default function Certificates(props){
	const params = useParams();
  const { data, loading, error } = useFetch(`certificates/${params.id}`);
  if(!data) return (<div> Loading... </div>)
	return(
		<div className="space-y-4 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {data.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">{cert.certificate_name}</h3>
                  <p className="text-gray-600">{cert.date_of_award.split('T')[0]}</p>
                  <p className="text-sm text-gray-500">Completed {cert.description}</p>
                </div>
              </div>
            ))}
          </div>
	)
}