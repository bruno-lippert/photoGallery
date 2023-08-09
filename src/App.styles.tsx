import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #003060;
    min-height: 100vh;

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
    //height: 50px;
    width: 70%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    flex-wrap: wrap;

    input[type=submit] {
        border-radius: 10px;
        font-size: 1rem;
        background-color: #0E86D4;
        border: none;
        cursor: pointer;
        padding: 5px;
        color: #fff;

        &:hover {
            background-color: #68BBE3;
        }
    }

    input[type=file]{
        display: none; /* Esconde o input original */
    }

    .custom-file-label {
        background-color: #0E86D4;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        padding: 5px;
    }

    .custom-file-label:hover {
        background-color: #68BBE3;
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