import { FC } from 'react';

export const NoResults: FC<unknown> = () => {
  return (
    <div className="overflow-hidden shadow-md rounded-md bg-white p-4 mb-2 mw-full">
      <h3 className="px-2 py-4 font-bold text-lg">No Results</h3>
    </div>
  );
};
