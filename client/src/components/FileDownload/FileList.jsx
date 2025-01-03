import React from 'react';
import FileListItem from './FileListItem';

const FileList = ({ files }) => {
  if (!files || files.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No files available for download.</p>
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