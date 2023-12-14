export interface I_CANDIDATE {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  education: string;
  company: string;
  job_title: string;
  avatar: string;
};

export interface I_PAGINATION {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const DEFAULT_PAGE = 1;

export const ENTRIES_PER_PAGE = 20;
