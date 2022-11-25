import styled from "styled-components";
import { IButtonProps } from "../../../interfaces/components";

export const ButtonStyle = styled.button`
    font-family: 'Poppins';
    border-radius: 3px;
    border: none;
    color: ${({color})=> `var(--${color})`};
    width: ${({width} :IButtonProps) => `${width}px`};
    height: ${({height} :IButtonProps) => `${height}px`};
    background-color: ${({b_color} :IButtonProps) => `var(--${b_color})`}

`