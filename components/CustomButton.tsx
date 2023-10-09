'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';

interface CustomButtonProps {
  title: string;
  type?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  type,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={type || 'button'}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1  ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='Right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
