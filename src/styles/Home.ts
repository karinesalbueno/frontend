import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
`;

export const Card = styled.div`
    width: 80%;
    margin: auto;
`;

export const CardItemUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 36px;
    border-radius: 8px;
`;

export const CardItemLi = styled.li`
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding: 30px;
`;
