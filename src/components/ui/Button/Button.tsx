import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  label: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, label, disabled = false }) => {
  return (
    <Link
      href={disabled ? '#' : href}
      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-sm font-medium text-white ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed '
          : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      }`}
    >
      {label}
    </Link>
  );
};

export default Button;
