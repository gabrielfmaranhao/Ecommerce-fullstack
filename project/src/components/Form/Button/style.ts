import styled from "styled-components";

export interface IButtonSProps {
    width: number,
    height: number,
    b_color: "white" | "black" | "red"
    color: "white" | "black" | "red"
}

export const ButtonStyle = styled.button`
    font-family: 'Poppins';
    border-radius: 3px;
    border: none;
    color: ${({color})=> `var(--${color})`};
    width: ${({width} :IButtonSProps) => `${width}px`};
    height: ${({height} :IButtonSProps) => `${height}px`};
    background-color: ${({b_color} :IButtonSProps) => `var(--${b_color})`}

`