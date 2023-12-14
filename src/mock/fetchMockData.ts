import { mockData } from '@/mock/mockCandidates';
import { ENTRIES_PER_PAGE, DEFAULT_PAGE } from '@/utils';

const fetchMockData = (page: number = DEFAULT_PAGE, entriesPerPage: number = ENTRIES_PER_PAGE) => {
  const startIndex = (page - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const slicedMockData = mockData.slice(startIndex, endIndex);

  return slicedMockData;
};

export default fetchMockData;