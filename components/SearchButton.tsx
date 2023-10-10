import Image from 'next/image';

interface SearchButtonProps {
  otherClasses: string;
}

const SearchButton = ({ otherClasses }: SearchButtonProps) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src='/magnifying-glass.svg'
        alt='Search button'
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );
};

export default SearchButton;
