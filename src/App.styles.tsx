import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #003060;
    height: 100vh;

    @media (max-width: 1200px) {
        .photoGrid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (max-width: 700px) {
        .photoGrid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 500px) {
        .photoGrid {
            grid-template-columns: repeat(1, 1fr);
            padding-bottom: 40px;
        }
        .uploadFile {
            padding: 10px 10px;
        }
    }
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
    justify-content: center;
    gap: 10px;
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: wrap;

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