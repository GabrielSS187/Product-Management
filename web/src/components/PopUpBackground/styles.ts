import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%,-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;