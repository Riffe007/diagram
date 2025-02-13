// src/components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DarkModeToggle from '@/components/DarkModeToggle';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Diagrams</title>
        <meta
          name="description"
          content="Advanced, animated diagrams for Lawyer on Demand"
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Diagram
              </Link>
            </h1>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link
                href="/diagrams"
                className="hover:text-gray-300 transition-colors"
              >
                Diagrams
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
              <DarkModeToggle />
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto flex-grow p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-700 text-white p-4">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Diagram. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
