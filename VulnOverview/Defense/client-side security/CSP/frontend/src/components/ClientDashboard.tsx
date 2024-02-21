import React, { useState } from 'react';
import { Layout, Menu, theme, Input, Col, Row, Typography, Button } from 'antd';
import UploadProject from './Upload';
import axios from 'axios';

const { Title, Paragraph, Text, Link } = Typography;

export default function ClientDashboard() {
  const [projectName, setProjectName] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (pdf: File) => {
    setUploadedFile(pdf);
  };

  const handleSend = async () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('pdf', uploadedFile);

      // Дополнительные данные формы, если требуется
      // formData.append('projectName', projectName);

      try {
        await axios.post('http://127.0.0.1:8000/api/files/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Успешная отправка формы
        // Добавьте необходимую логику или обновите состояние компонента

      } catch (error) {
        // Обработка ошибки при отправке формы
        // Обработайте ошибку соответствующим образом
      }
    }
  };

  return (
    <div>
      <Row style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Title level={4}>Загрузите проект</Title>
          <Input
            size="large"
            placeholder="Название проекта"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <UploadProject onFileUpload={handleFileUpload} />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Button block type="primary" onClick={handleSend}>
            Отправить
          </Button>
        </Col>
      </Row>
    </div>
  );
}
