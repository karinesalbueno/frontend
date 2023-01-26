import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 101px;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0f52ba;
`;

export const Logo = styled.div`
    #logo {
        margin: 0 0 2px 10px;
    }
`;

export const Cart = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border-radius: 8px;
    padding: 0px 25px;
    border: none;
    cursor: pointer;
`;
