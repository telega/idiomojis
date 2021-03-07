import { FC, useState, useEffect } from 'react';
import { sample } from 'lodash';
const straplines = require('../public/straplines.json');

const TITLE = 'Welcome to Idiomojis!';

export const Header: FC<any> = () => {
  const [strapline, setStrapline] = useState('');

  useEffect(() => {
    setStrapline(sample(straplines));
  }, []);

  return (
    <>
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
        {TITLE}
      </h1>
      <p className="mb-8 leading-relaxed">{strapline}</p>
    </>
  );
};
