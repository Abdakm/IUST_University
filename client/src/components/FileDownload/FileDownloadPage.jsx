import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Files } from 'lucide-react';
import FileList from './FileList';
import { Navbar } from '../index'

export default function FileDownloadPage() {
  const params = useParams();
  const location = useLocation();

  const { data, loading, error } = useFetch(`/course/${params.id}`);
  const courseName = location.state?.materialName;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-red-500 text-center">
          <p className="text-xl dark:text-red-400">Error loading files</p>
          <p className="text-sm dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
  	<div>
	  	<Navbar />
	    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
	      <div className="max-w-3xl mx-auto">
	        <div className="flex items-center space-x-3 mb-8 mt-20">
	          <Files className="w-8 h-8 text-blue-500 dark:text-blue-400" />
	          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
	            {courseName || 'Material Files'}
	          </h1>
	        </div>
	        <FileList files={data} />
	      </div>
	      {/*<span className='text-white text-center w-full bg-black max-w-3xl mx-auto block'> Hello </span>*/}
	    </div>
	</div>
  );
}
