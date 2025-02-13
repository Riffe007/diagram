// src/pages/about.tsx
import React from 'react';
import Layout from '@/components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">About Lawyer on Demand Diagrams</h1>
        <p className="mb-4">
          Diagrams is an interactive, modern visualization tool showcasing simple icons.
        </p>
        <p>
          Our goal is to show animated diagrams that demonstrate our technical and strategic capabilities.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
