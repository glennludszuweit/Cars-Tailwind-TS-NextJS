import { MouseEventHandler } from "react"

export interface CustomButtonTypes {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}