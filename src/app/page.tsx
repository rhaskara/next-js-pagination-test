'use client'
// pages/index.tsx
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Table from '@/app/components/Table';
import Pagination from '@/app/components/Pagination';
import fetchMockData from "@/mock/fetchMockData"
import { ENTRIES_PER_PAGE } from '@/utils'; 

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const pageNumber = Number(searchParams.get('pageNumber')) ? Number(searchParams.get('pageNumber')) : 1;
  const mockData = fetchMockData(pageNumber, ENTRIES_PER_PAGE);
  const changePage = (e: number) => {
    searchParams.set('pageNumber', String(e))
    router.push(`${pathname}?${searchParams}`);
  }

  return (
    <main className="w-screen h-screen relative">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Candidate List</h1>
        <Table data={mockData} />
        <Pagination currentPage={pageNumber} totalPages={50} onPageChange={changePage} />
      </div>
    </main>
  )
};
