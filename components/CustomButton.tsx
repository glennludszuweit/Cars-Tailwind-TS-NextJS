'use client';

import { CustomButtonTypes } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonTypes) => {
  return (
    <button
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;