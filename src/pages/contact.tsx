// src/pages/contact.tsx
import React from 'react';
import Layout from '@/components/Layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          For questions, feedback, or partnership inquiries, please reach out to us:
        </p>
        <ul className="list-disc list-inside">
          <li>Email: <a href="timothy@riffeandassociates.com" className="text-blue-600 hover:underline">timothy@riffeandassociates.com</a></li>
          <li>Phone: (661) 809-6450</li>
          <li>Address: Bakersfield, Ca, 93312</li>
        </ul>
      </div>
    </Layout>
  );
};

export default ContactPage;
