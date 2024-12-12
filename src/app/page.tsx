import { Suspense } from 'react';
import { LoadingSpinner } from '@/components';
import { FilterSection } from '@/sections';

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <h1 className='text-2xl font-bold text-gray-900 mb-4'>Car Dealer App</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <FilterSection />
      </Suspense>
    </main>
  );
}
