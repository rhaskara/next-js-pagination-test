'use client'
// pages/index.tsx
import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Table from '@/app/components/Table';
import Pagination from '@/app/components/Pagination';
import fetchMockData from "@/mock/fetchMockData"
import { ENTRIES_PER_PAGE, I_CANDIDATE } from '@/utils';

interface I_RESULT {
  data: I_CANDIDATE[],
  totalPages: number,
}

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageNumber = Number(searchParams.get('pageNumber')) ? Number(searchParams.get('pageNumber')) : 1;
  const searchName = searchParams.get('name')?.toString();
  const mockData: I_RESULT = fetchMockData(pageNumber, ENTRIES_PER_PAGE, searchName);

  useEffect(() => {
    const totalPages = mockData.totalPages; // Replace with the actual total number of pages

    if (pageNumber < 1 || pageNumber > totalPages) {
      // Redirect to a valid page or show an error page
      router.replace('/');
    }
  }, [pageNumber, router, mockData]);

  const changePage = (e: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('pageNumber', String(e))
    router.push(`${pathname}?${params}`);
  }

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('name', term);
      // reset page number each time upon searching name
      params.delete('pageNumber');
    } else {
      params.delete('name');
    }
    router.push(`${pathname}?${params.toString()}`);
  }, 500)

  return (
    <main className="w-screen h-screen relative">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Candidate List</h1>
        <input
          className="peer block w-50 rounded-md mb-4 border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search Name"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('name')?.toString()}
        />
        <Table data={mockData.data} />
        { mockData.totalPages > 0 && (
          <Pagination currentPage={pageNumber} totalPages={mockData.totalPages} onPageChange={changePage} />
        )}
      </div>
    </main>
  )
};
