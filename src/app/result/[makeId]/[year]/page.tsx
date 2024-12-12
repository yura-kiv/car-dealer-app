import Link from 'next/link';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui';
import { ModelsSection } from '@/sections';
import { fetchMakes } from '@/lib';
import { YEARS } from '@/constants';

interface PageProps {
  params: {
    makeId: string;
    year: string;
  };
}

export async function generateStaticParams() {
  const makes = await fetchMakes();

  const params = makes.flatMap((make) =>
    YEARS.map((year) => ({
      makeId: String(make.MakeId),
      year: String(year),
    }))
  );

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { makeId, year } = await params;

  return {
    title: `Models for Make ${makeId} in ${year}`,
    description: `View the available car models for Make ID ${makeId} in the year ${year}.`,
  };
}

export default async function ResultPage({ params }: PageProps) {
  const { makeId, year } = await params;

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <h1 className='text-2xl font-bold text-gray-900 mb-4'>Car Models</h1>
      <p className='text-gray-700 mb-6'>
        Available models for Make ID {makeId} in {year}:
      </p>

      <Suspense fallback={<LoadingSpinner />}>
        <ModelsSection
          makeId={makeId}
          year={year}
        />
      </Suspense>

      <Link
        href='/'
        className='mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
      >
        Back to Home
      </Link>
    </main>
  );
}
