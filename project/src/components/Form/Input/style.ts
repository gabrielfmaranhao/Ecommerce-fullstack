import styled from "styled-components";
import { IInputProps } from "../../../interfaces/components";


export const Input = styled.input`
    width: ${({width}:IInputProps) => `${width}px`};
    height: ${({height}:IInputProps) => `${height}px`};

`