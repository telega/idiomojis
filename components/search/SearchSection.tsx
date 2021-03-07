import { FC } from 'react';
import { SearchBar } from './SearchBar';
import { IdiomojiData } from '../../interfaces/IdiomojiData';

interface SearchSectionProps {
  setResults: Function;
  data: IdiomojiData[];
}

export const SearchSection: FC<SearchSectionProps> = ({ setResults, data }) => {
  return (
    <div className="flex w-full md:justify-start justify-center items-end mb-4">
      <SearchBar setResults={setResults} data={data} />
    </div>
  );
};
