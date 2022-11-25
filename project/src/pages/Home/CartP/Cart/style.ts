import styled from "styled-components";




export const Container = styled.ul`
    color: var(--black);
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    overflow-x: hidden;
`

export const Card = styled.li`
    background-color: var(--white);
    display: flex;
    padding: 5px;
    border-radius: 8px;
    width: 90%;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    img {
        width: 40px;
        height: 30px;
        border-radius: 4px;
    }
    .information {
        color: var(--black);
        font-family: 'Poppins';
        font-size: 14px;
    }
    .buttonTrash {
        background-color: var(--white);
        border: none;
    }

`

export const DivPrice = styled.div`
    width: 90%;
    background-color: var(--white);
    border-radius: 4px;
    display: flex;
    justify-content: center;
        h3 {
            font-family: 'Poppins';
            font-size: 14px;
        }
`