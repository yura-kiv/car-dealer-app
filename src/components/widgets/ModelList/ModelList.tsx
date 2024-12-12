import { Model } from '@/types';
import React from 'react';

interface ModelListProps {
  models: Model[];
}

const ModelList: React.FC<ModelListProps> = ({ models }) => {
  if (!models.length) {
    return (
      <p className='text-gray-700 text-lg font-medium'>
        No models found for the selected make and year.
      </p>
    );
  }

  return (
    <ul className='w-full max-w-md space-y-4 overflow-y-auto max-h-[60vh]'>
      {models.map(({ Make_ID, Make_Name, Model_ID, Model_Name }) => (
        <li
          key={Model_ID}
          className='p-4 bg-white rounded-lg shadow-md border border-gray-200'
        >
          <span className='text-lg font-medium text-gray-900'>
            {Model_ID} - {Model_Name} - {Make_Name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ModelList;
