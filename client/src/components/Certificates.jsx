import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/languageContext'; // <- same as Materials
import { CheckCircle } from 'lucide-react';
import useFetch from '../hooks/useFetch';

export default function Certificates() {
  const { id } = useParams();
  const { language } = useLanguage(); // <- consistent context usage
  const { data, loading, error } = useFetch(`certificates/${id}`);

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <div>Error loading certificates</div>;

  return (
    <div className={`space-y-4 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ${language === 'AR' ? 'text-right' : ''}`}>
      {data.map((cert, index) => (
        <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
          <div className="w-full">
            <h3 className="font-semibold text-gray-800">
              {language === 'AR' ? cert.certificate_name_ar || cert.certificate_name_en : cert.certificate_name_en}
            </h3>
            <p className="text-gray-600">{cert.date_of_award.split('T')[0]}</p>
            <p className="text-sm text-gray-500">
              {language === 'AR' ? cert.description_ar || cert.description_en : `Completed ${cert.description_en}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
