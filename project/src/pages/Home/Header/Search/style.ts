import styled from "styled-components";

export const Container = styled.div`
display: flex;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
gap: 5px;
width: 180px;
height: 40px;
align-items: center;
justify-content: center;
border-radius: 8px;
    input {
        border: none;
        border-right: 1px solid var(--black);
        padding: 3px 0px 3px 10px ;
        width: 100px;

    }
    button {
        border: none;
        background-color: var(--white);

    }

`