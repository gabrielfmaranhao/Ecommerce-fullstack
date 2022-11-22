import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    background-color: var(--white);
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-family: 'Poppins';
    h2 {
        font-size: 22px;
        color: var(--red);
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    label {
        font-size: 12px;
        color: var(--red);
    }
    .divIcon {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-right: 15px;
    }
    #buttonIcon {
        background-color: var(--white);
        border-radius: 100px;
        border: 1px solid var(--red);
    }
`