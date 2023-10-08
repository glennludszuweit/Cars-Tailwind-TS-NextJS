'use client';

import { useState } from 'react';
import { SearchManufacturer, SearchModel } from '.';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = () => {};

  return (
    <div className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className='searchbar__item'>
        <SearchModel model={model} setModel={setModel} />
      </div>
    </div>
  );
};

export default SearchBar;
