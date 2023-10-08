import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string;
  type?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface SearchModelProps {
  model: string
  setModel: (model: string) => void
}