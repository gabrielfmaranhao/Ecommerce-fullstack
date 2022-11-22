import styled from "styled-components";
import { IInputProps } from ".";


export const Input = styled.input`
    width: ${({width}:IInputProps) => `${width}px`};
    height: ${({height}:IInputProps) => `${height}px`};

`