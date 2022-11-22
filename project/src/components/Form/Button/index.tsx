import { ButtonHTMLAttributes } from "react"
import { ButtonStyle } from "./style"


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    width: number,
    height: number,
    b_color: "white" | "black" | "red" 
    color: "white" | "black" | "red"
}
export const Button = ({name, b_color, width, height, color, onClick }:IButtonProps) => {
    return <ButtonStyle  b_color={b_color} height={height} width={width} color={color} onClick={onClick}>{name}</ButtonStyle>
}