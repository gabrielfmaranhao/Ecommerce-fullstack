import styled from "styled-components";
import { IStyleContainerLogo } from "../../interfaces/styles";

export const Container = styled.div`
    width: ${({width}:IStyleContainerLogo) => `${width}px`} ;
    height: ${({height}:IStyleContainerLogo) => `${height}px`} ;
    border-radius: ${({radius}:IStyleContainerLogo) => `${radius}px`} ;
    background: var(--red);
    font-family: 'Poppins';
    display: flex;
    justify-content: center;
    align-items: center;
        h1 {
            font-size: ${({h1_size}:IStyleContainerLogo) => `${h1_size}px`};
            text-align: center;
        }
`