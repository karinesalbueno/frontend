import styled from "styled-components";

export const Section = styled.section`
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;

    @media (min-width: 768px) {
    }

    ul {
        padding: 0 50px;
    }
`;

export const Card = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    background: #ffffff;
    color: #2c2c2c;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 28px;

    padding: 19px;

    height: 100px;

    img {
        height: 60px;
        width: 60px;
    }

    h4 {
        width: 113px;
        font-style: normal;
        font-weight: 400;
    }

    .price {
        font-weight: 700;
    }
`;

export const SumDiv = styled.div`
    margin-bottom: 18px;

    div {
        display: flex;
        align-items: center;
        background: #ffffff;
        border: 0.3px solid #bfbfbf;
        border-radius: 4px;
        padding: 2px;
        margin-top: 4px;
    }

    small {
        font-size: 0.55rem;
    }

    button {
        background: #ffffff;
        border: none;
    }

    .quantity {
        padding: 0 6px;
        font-size: 0.78rem;
    }

    .border {
        display: block;
        border-right: 0.2px solid #bfbfbf;
        height: 12px;
    }
`;

export const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 40px;
`;
