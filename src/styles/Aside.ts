import styled from "styled-components";

export const Aside = styled.aside`
    width: 80%;
    height: 100vh;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
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
