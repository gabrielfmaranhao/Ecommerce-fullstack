import styled from "styled-components";



export const Container = styled.div`
    width: 300px;
    height: 200px;
    background-color: var(--white);
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0px 1px 6px rgb(0 0 0 / 10%);
`
export const DivTexto = styled.div`
    height: 30px;
    background-color: var(--red);
    color: var(--white);
    font-family: 'Poppins';
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0 0 ;
`

export const DivContent = styled.div`
    background-color: var(--grey);
    height: 170px;
    border-radius: 0 0 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`