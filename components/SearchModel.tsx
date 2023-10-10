import { Fragment } from 'react';
import { SearchButton } from '.';
import Image from 'next/image';

interface SearchModelProps {
  model: string;
  setModel: (model: string) => void;
}

const SearchModel = ({ model, setModel }: SearchModelProps) => {
  return (
    <Fragment>
      <Image
        src='/model-icon.png'
        alt='Model logo'
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
      />
      <input
        type='text'
        name='model'
        value={model}
        placeholder='Tiguan'
        onChange={(e) => setModel(e.target.value)}
        className='searchbar__input'
      />
      <SearchButton otherClasses='sm:hidden' />
    </Fragment>
  );
};

export default SearchModel;
