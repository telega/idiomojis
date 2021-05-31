import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import  twemoji from 'twemoji'


interface EmojiResultDisplayProps {
  emojis: string;
}

export const EmojiResultDisplay: FC<EmojiResultDisplayProps> = ({ emojis }) =>  {
  
  const __html  = twemoji.parse(emojis, {folder: 'svg',
  ext: '.svg'})

  return (<div className="flex px-2 py-4 border-b justify-between">
    <CopyToClipboard text={emojis}>
      <div className="cursor-pointer has-tooltip" >
        <div className="flex space-x-1" dangerouslySetInnerHTML= {{__html}} />
        <span className="tooltip rounded shadow-sm text-sm p-1 bg-gray-100 ml-1 mt-1 p-1">
          Click to copy
        </span>
      </div>
    </CopyToClipboard>
  </div>
)};
