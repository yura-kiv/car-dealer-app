import React from 'react';

interface DropdownProps {
  id: string;
  label: string;
  options: { value: string | number; label: string }[];
  value: string | number | null;
  disabled?: boolean;
  onChange: (value: string | number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  options,
  value,
  disabled = false,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <select
        id={id}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : ''
        }`}
      >
        <option
          value=''
          disabled
        >
          Select an option
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
