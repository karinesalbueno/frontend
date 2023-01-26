import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    margin-top: 60px;
`;

export const Card = styled.div`
    width: 80%;
    margin: auto;
`;

export const CardItemUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 18px;
    border-radius: 8px;
`;

export const CardItemLi = styled.li`
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding: 10px 20px;

    list-style: none;

    img{
        height: 100px;
    }

    p{
        font-size: 0.8rem
    }
`;
