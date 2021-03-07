import { FC } from 'react';

interface RandomButtonProps {
  setRandomResult: Function;
}

export const RandomButton: FC<RandomButtonProps> = ({ setRandomResult }) => {
  return (
    <button
      className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mb-12"
      onClick={() => setRandomResult()}
    >
      Random
    </button>
  );
};
