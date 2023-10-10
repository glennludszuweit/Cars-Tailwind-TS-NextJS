'use client';

import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams('limit', `${newLimit}`);
    router.push(newPathname);
  };

  return (
    <div className='flex-center w-full gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          type='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
