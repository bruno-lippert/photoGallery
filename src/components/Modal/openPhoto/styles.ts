import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    backdrop-filter: blur(5px); /* Aplica o efeito de desfoque */

    
`;

export const Modal = styled.div`
    background-color: #003060;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    gap: 10px;
    position: relative;
    
    .closeImg{
        position: absolute;
        right: 5px;
        top: 5px;
        width: 10px;
        cursor: pointer;
    }
`;

export const ImgContainer = styled.div`
    width: 60vw;
    height: auto;
    
`;

export const Teste = styled.div`
    
`;

export const Photo = styled.img`
    width: 100%;
    border-radius: 10px;
`;