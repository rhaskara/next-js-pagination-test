import { mockData } from '@/mock/mockCandidates';
import { ENTRIES_PER_PAGE, DEFAULT_PAGE } from '@/utils';

const fetchMockData = (page: number = DEFAULT_PAGE, entriesPerPage: number = ENTRIES_PER_PAGE, searchName: string | undefined) => {
  const filteredMockData = (searchName)
    ? mockData.filter(candidate => `${candidate.first_name.toLowerCase()} ${candidate.last_name.toLowerCase()}`.includes(searchName.toLowerCase()))
    : mockData;

  const startIndex = (page - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const slicedMockData = filteredMockData.slice(startIndex, endIndex);
  return {
    data: slicedMockData,
    totalPages: Math.floor(filteredMockData?.length / entriesPerPage),
  };
};

export default fetchMockData;