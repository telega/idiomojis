import { FC } from 'react';

interface IdiomTitleProps {
  text: string;
}
export const IdiomTitle: FC<IdiomTitleProps> = ({ text }) => (
  <h3 className="px-2 py-4 font-bold text-lg">{text}</h3>
);
