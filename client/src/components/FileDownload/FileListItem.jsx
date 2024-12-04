import React from 'react';
import { Download, FileText } from 'lucide-react';
import { useFileDownload } from '../../hooks/useFileDownload';

const FileListItem = ({ file, index }) => {
  const { downloadFile, isDownloading } = useFileDownload();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3">
        <span className="text-gray-700 text-bold">{index + 1}</span>
        <FileText className="w-6 h-6 text-blue-500" />
        <span className="text-gray-700">{file.description}</span>
      </div>
      
      <button
        onClick={() => downloadFile(file.file_url)}
        disabled={isDownloading}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 disabled:bg-blue-300"
      >
        <Download className="w-4 h-4" />
        <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
      </button>
    </div>
  );
};

export default FileListItem;