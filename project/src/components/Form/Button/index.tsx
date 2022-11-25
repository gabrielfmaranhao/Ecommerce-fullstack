
import { ButtonStyle } from "./style"
import { IButtonProps } from "../../../interfaces/components"


export const Button = ({name, b_color, width, height, color, onClick }:IButtonProps) => {
    return <ButtonStyle  b_color={b_color} height={height} width={width} color={color} onClick={onClick}>{name}</ButtonStyle>
}