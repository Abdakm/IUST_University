import { useState } from 'react';
import toast from 'react-hot-toast';

export const useFileDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async (url) => {
    try {
      setIsDownloading(true);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const filename = url.split('/').pop() || 'download';

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      
      toast.success('Download completed successfully');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download file');
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadFile, isDownloading };
};