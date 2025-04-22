import React from 'react';
import FileListItem from './FileListItem';
import { useLanguage } from '../../contexts/languageContext';

const FileList = ({ files }) => {
  const { language } = useLanguage();

  // If it's an object with only a "message" key, show "no information"
  const isMessageOnly = files && typeof files === 'object' && 'message' in files && Object.keys(files).length === 1;

  if (!files || isMessageOnly || (Array.isArray(files) && files.length === 0)) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-600">
          {language === "EN" ? 'No files available for download.' : 'لا توجد ملفات متاحة للتحميل.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {files.map((file, index) => (
        <FileListItem index={index} file={file} key={index} />
      ))}
    </div>
  );
};

export default FileList;
