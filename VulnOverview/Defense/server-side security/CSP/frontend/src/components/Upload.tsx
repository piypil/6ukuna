import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';

const { Dragger } = Upload;

interface UploadProjectProps {
  onFileUpload: (pdf: File) => void;
}

const UploadProject: React.FC<UploadProjectProps> = ({ onFileUpload }) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleFileChange = (info: any) => {
    setFileList(info.fileList);
  };

  const handleFileUpload = async (pdf: File) => {
    try {
      const formData = new FormData();
      formData.append('file', pdf);

      await axios.post('http://127.0.0.1:8000/api/files/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      message.success(`${pdf.name} файл успешно загружен.`);
      onFileUpload(pdf);
    } catch (error) {
      message.error(`${pdf.name} ошибка загрузки файла.`);
      console.log(error);
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <Dragger fileList={fileList} onChange={handleFileChange} beforeUpload={() => false}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Нажмите или перетащите проект для загрузки</p>
        <p className="ant-upload-hint">При большом размере проекта загрузка может занять продолжительное время</p>
      </Dragger>
      {fileList.length > 0 && (
        <p style={{ marginTop: 16 }}>
          Загруженный файл: <strong>{fileList[0].name}</strong>
        </p>
      )}
      <button onClick={() => fileList.length > 0 && handleFileUpload(fileList[0].originFileObj)}>Отправить</button>
    </div>
  );
};

export default UploadProject;
