export interface SearchQueryState {
  query: string;
  updateQuery: (value: string) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// export interface ButtonParams {
//   imgUrl: string;
//   text: string;
//   bgColor: string;
//   textColor: string;
// }