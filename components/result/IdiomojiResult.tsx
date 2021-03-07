import { FC } from 'react';
import { IdiomojiData } from '../../interfaces/IdiomojiData';
import { EmojiResultDisplay } from './EmojiResultDisplay';
import { IdiomDescription } from './IdiomDescription';
import { IdiomTitle } from './IdiomTitle';
import { IdiomMeta } from './IdiomMeta';

interface IdiomojiResultProps {
  result: IdiomojiData;
}

export const IdiomojiResult: FC<IdiomojiResultProps> = ({ result }) => {
  const { emojis, text, description, origin, link } = result;

  return (
    <div className="overflow-hidden shadow-md rounded-md bg-white p-4 mb-2 mw-full">
      <EmojiResultDisplay emojis={emojis} />
      <IdiomTitle text={text} />
      <IdiomDescription description={description} />
      <IdiomMeta origin={origin} link={link} />
    </div>
  );
};
