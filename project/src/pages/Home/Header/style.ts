import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    padding: 5px 10px;
    justify-content: center;
    gap: 40px;

    .box {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .avatar {
        display: flex;
        gap: 5px;
        background-color: var(--white);
        border-radius: 4px;
        width: 80px;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1)
    }
`