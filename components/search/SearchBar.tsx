import Fuse from 'fuse.js/dist/fuse.basic';
import { FC, useState } from 'react';
import { IdiomojiData } from '../../interfaces/IdiomojiData';

const options: Fuse.IFuseOptions<IdiomojiData> = {
  includeScore: false,
  keys: ['text'],
  threshold: 0.2,
};

interface SearchBarProps {
  setResults: Function;
  data: IdiomojiData[];
}

export const SearchBar: FC<SearchBarProps> = ({ setResults, data }) => {
  const [searchText, setSearchText] = useState('');
  const fuse = new Fuse(data, options);

  const onChange = (value: string) => {
    setSearchText(value);
    if (searchText.length > 1) {
      const results = fuse
        .search(searchText, { limit: 10 })
        .map(({ item }) => item);
      setResults(results);
    }
  };

  return (
    <div className="relative md:w-full lg:w-full xl:w-1/2 w-2/4">
      <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
        Type to search
      </label>
      <input
        type="text"
        id="hero-field"
        name="hero-field"
        className="w-full bg-white rounded border bg-opacity-100 border-gray-300 focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => onChange(e.target.value)}
        value={searchText}
      />
    </div>
  );
};
