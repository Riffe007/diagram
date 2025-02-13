// src/pages/diagrams.tsx
import React from 'react';
import DiagramWrapper from '@/components/Diagram';
import Layout from '@/components/Layout';

const DiagramsPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Diagrams
        </h1>
        <div className="border rounded-lg shadow-lg bg-white p-4">
          <DiagramWrapper />
        </div>
      </div>
    </Layout>
  );
};

export default DiagramsPage;
