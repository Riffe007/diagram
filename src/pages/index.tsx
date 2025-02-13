// src/pages/index.tsx
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto text-center py-10">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Diagrams
        </h1>
        <p className="text-xl mb-8">
          Explore animated diagrams showcasing our platform’s.
        </p>
        <div>
          <Link
            href="/diagrams"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            View Diagram
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
