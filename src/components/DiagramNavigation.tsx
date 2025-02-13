// src/components/DiagramNavigation.tsx
import React from 'react';
import Link from 'next/link';

const DiagramNavigation: React.FC = () => {
  return (
    <nav className="bg-gray-200 p-4 rounded mb-6">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/diagrams" className="text-blue-600 hover:underline">
            All Diagrams
          </Link>
        </li>
        <li>
          <Link href="/diagrams/architecture" className="text-blue-600 hover:underline">
            Architecture
          </Link>
        </li>
        <li>
          <Link href="/diagrams/ci-cd" className="text-blue-600 hover:underline">
            CI/CD
          </Link>
        </li>
        <li>
          <Link href="/diagrams/data-model" className="text-blue-600 hover:underline">
            Data Models
          </Link>
        </li>
        {/* Add additional diagram navigation items as needed */}
      </ul>
    </nav>
  );
};

export default DiagramNavigation;
