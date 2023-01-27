import styled from "styled-components";

export const Aside = styled.aside`
    width: 80%;
    height: 100vh;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    display: grid;
    grid-template-rows: 14% auto 97px;
    z-index: 3;

    background: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    @media (min-width: 768px) {
        width: 486px;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    margin: 0 20px 0 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 33px;

    h4 {
        width: 160px;
        height: 56px @media (min-width: 768px) {
            width: 200px;
        }
    }

    img {
        height: 45px;
        width: 45px;

        @media (min-width: 768px) {
            height: 38px;
            width: 38px;
        }
    }

    @media (min-width: 768px) {
        font-size: 1.688rem;
        margin: 0 22px 0 47px;
    }
`;

export const Footer = styled.footer`
    position: fixed;
    width: 100%;
    height: 97px;
    bottom: 0;
    background: #000000;
    color: #ffffff;
`;
