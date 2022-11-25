import styled from "styled-components";

export const Card = styled.li`
    background-color: var(--white);
    color: var(--black);
    box-shadow: 0px 1px 6px rgb(0 0 0 / 10%);
    width: 200px;
    font-family: 'Poppins';
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        width: 200px;
        height: 100px;
        border-radius: 5px 5px 0px 0px;
    }
    span {
        font-size: 12px;
        padding-left: 5px;
        color: var(--red);
    }
    .principal {
        padding: 5px;
    }
    .spanCategorie, .description {
        color: var(--grey);
        padding-left: 5px;
    }
    .description {
        font-size: 12px;
    }
    strong {
        font-size: 20px;
    }
`