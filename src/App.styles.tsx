import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #003060;
    height: 100vh;
`;

export const Header = styled.header`
    color: #fff;
    font-size: 2rem;
    margin: 30px 0;
`;

export const UploadFile = styled.form`
    background-color: #055C9D;
    height: 50px;
    width: 70%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 15px;

    input[type=submit] {
        border-radius: 10px;
        font-size: 1rem;
        background-color: #0E86D4;
        border: none;
        cursor: pointer;
    }
`;

export const MainContent = styled.section`
    width: 70%;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

export { }