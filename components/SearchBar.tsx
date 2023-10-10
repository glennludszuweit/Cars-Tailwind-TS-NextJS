'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchButton, SearchManufacturer, SearchModel } from '.';

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      alert('Please enter car manufacturer or model.');
    }

    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>

      <div className='searchbar__item'>
        <SearchModel model={model} setModel={setModel} />
      </div>

      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
