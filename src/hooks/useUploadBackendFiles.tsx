import { useState } from 'react';
import axios from 'axios';
import { FileInfo } from '@/domain/graphql';

export const useUploadBackendFiles = () => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [counterKB, setCounterKB] = useState<string>('');

  const formatKB = (value: number) => {
    return value.toFixed(2) + 'KB';
  };

  const handleUploadImage = async (file: any) => {
    const url = `${import.meta.env.VITE_APP_GRAPH}attachment/files`;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<FileInfo>(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent: any) => {
          const percentCompleted = progressEvent.loaded ? Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0;

          const totalKB = progressEvent.total ? progressEvent.total / 1024 : 0;
          const uploadedKB = progressEvent.loaded / 1024;

          setCounterKB(formatKB(uploadedKB) + ' / ' + formatKB(totalKB));

          setLoadingProgress(percentCompleted);
        },
      });

      return response?.data;
    } catch (error) {
    } finally {
      setLoadingProgress(101);
    }
  };

  return { handleUploadImage, loadingProgress, setLoadingProgress, counterKB };
};

