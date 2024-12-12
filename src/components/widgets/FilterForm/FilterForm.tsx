'use client';

import React, { useState } from 'react';
import { Dropdown, Button } from '@/components/ui';
import { YEARS } from '@/constants';
import { Make } from '@/types';

interface FilterFormProps {
  makes: Make[];
}

const FilterForm: React.FC<FilterFormProps> = ({ makes }) => {
  const [selectedMake, setSelectedMake] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div className="space-y-4 w-full max-w-md">
      <Dropdown
        id="make"
        label="Select Vehicle Make"
        value={selectedMake}
        onChange={(value) => setSelectedMake(Number(value))}
        options={makes.map((make) => ({
          value: make.MakeId,
          label: make.MakeName,
        }))}
      />
      <Dropdown
        id="year"
        label="Select Model Year"
        value={selectedYear}
        onChange={(value) => setSelectedYear(Number(value))}
        options={YEARS.map((year) => ({
          value: year,
          label: String(year),
        }))}
      />
      <Button
        label="Next"
        disabled={!selectedMake || !selectedYear}
        href={
          selectedMake && selectedYear
            ? `/result/${selectedMake}/${selectedYear}`
            : '#'
        }
      />
    </div>
  );
};

export default FilterForm;
