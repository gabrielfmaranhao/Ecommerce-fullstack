import styled from "styled-components";


export const Container = styled.div`
    background: var(--white);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        .box {
            background-color: var(--red);
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 4px;
            gap: 10px;
            padding: 10px;
        }
        a {
            color: var(--white);
            font-family: 'Montserrat';
        }
`