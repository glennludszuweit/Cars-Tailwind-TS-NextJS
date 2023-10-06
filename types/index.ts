import { MouseEventHandler } from "react"

export interface CustomButtonTypes {
  title: string;
  type?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}