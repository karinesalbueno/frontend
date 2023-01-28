import styled from "styled-components";

export const Body = styled.div`
    display: grid;
    height: 100vh;
    align-content: space-between;

    @media (min-width: 768px) {
        grid-template-rows: 101px auto 34px;
    }
`;
