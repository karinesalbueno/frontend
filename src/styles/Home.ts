import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    margin-top: 30px;
    padding-bottom: 2rem;

    @media (min-width: 600px) {
        margin-top: 50px;
    }
`;

export const Card = styled.div`
    width: 70%;
    margin: auto;

    @media (min-width: 480px) {
        width: 75%;
    }
`;

export const Skeleton = styled.div`
    width: 70%;
    margin: auto;

    @media (min-width: 480px) {
        width: 75%;
    }
`;

export const CardItemUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 18px;
    border-radius: 8px;
    padding: 0;
    justify-items: center;

    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 18px;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 30px 18px;
    }
`;

export const CardSkeletonLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    list-style: none;
`;

export const CardItemLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    list-style: none;

    .content {
        padding: 10px 15px;
    }

    small {
        color: #2c2c2c;
    }
`;

export const Image = styled.div`
    width: 100%;
    text-align: center;

    img {
        height: 100px;
    }
`;

export const InformationsDiv = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    min-height: 50px;
    margin-bottom: 2px;
    padding: 0;

    h3 {
        margin: 0;
        font-style: normal;
        font-size: 0.98rem;
        line-height: 19px;

        @media (min-width: 600px) {
            font-size: 1rem;
        }
    }
`;

export const Price = styled.div`
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
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #0f52ba;
    height: 32px;
    cursor: pointer;
    border: none;
    border-radius: 0px 0px 8px 8px;

    img {
        height: 14px;
    }

    span {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
        margin-left: 17px;
    }
`;
