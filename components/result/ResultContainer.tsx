import { FC } from 'react';
import { IdiomojiData } from '../../interfaces/IdiomojiData';
import { IdiomojiResult } from './IdiomojiResult';
import { NoResults } from './NoResults';

interface ResultContinerProps {
  results: IdiomojiData[];
}

export const ResultContainer: FC<ResultContinerProps> = ({ results }) => (
  <div className="lg:max-w-lg w-full">
    {results.length ? (
      results.map((result) => (
        <IdiomojiResult result={result} key={result.id} />
      ))
    ) : (
      <NoResults />
    )}
  </div>
);
