import React from 'react';
import { fetchMakes } from '@/lib';
import { FilterForm } from '@/components';

const FilterSection: React.FC = async () => {
  const makes = await fetchMakes();
  return <FilterForm makes={makes} />;
};

export default FilterSection;
