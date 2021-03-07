import { FC } from 'react';

interface IdiomDescriptionProps {
  description: string;
}
export const IdiomDescription: FC<IdiomDescriptionProps> = ({
  description,
}) => <p className="px-2 py-2">{description}</p>;
