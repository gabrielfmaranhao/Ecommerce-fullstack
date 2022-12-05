import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    padding: 5px 10px;
    justify-content: center;
    gap: 40px;
`
export const Box = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
    .divAvatar {
        display: flex;
        flex-direction: column;
        background-color: var(--white);
        border-radius: 4px;
        width: 50px;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        justify-content: center;
        align-items: center;
    }
`
export const DivAvatar = styled.div`
display: flex;
gap: 5px;
background-color: var(--white);
border-radius: 4px;
width: 50px;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
justify-content: center;
align-items: center;
`