// src/components/DarkModeToggle.tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatch.
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <span role="img" aria-label="light mode">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="dark mode">
          🌜
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;
