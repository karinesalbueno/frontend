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

    img {
        height: 100px;
    }

    small {
        color: #2c2c2c;
    }
`;

export const InformationsDiv = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0;
    height: 50px;

    h3 {
        margin: 0;
        font-style: normal;
        font-size: 1.1rem;
        line-height: 19px;
    }

    .price {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #373737;
        border-radius: 5px;
        min-width: 64px;
        height: 26px;
        color: #ffffff;
        font-weight: 700;
        font-size: 15px;
    }
`;
