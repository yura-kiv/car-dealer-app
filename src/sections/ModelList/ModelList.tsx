import { fetchModelsByMakeAndYear } from '@/lib';

interface ModelListProps {
  makeId: string;
  year: string;
}

const ModelList: React.FC<ModelListProps> = async ({ makeId, year }) => {
  const models = await fetchModelsByMakeAndYear(Number(makeId), Number(year));

  if (!models.length) {
    return (
      <p className='text-gray-700'>
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
