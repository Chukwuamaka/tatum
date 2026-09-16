export interface SearchQueryState {
  query: string;
  updateQuery: (value: string) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
