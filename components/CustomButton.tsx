'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  type,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={type || 'button'}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
