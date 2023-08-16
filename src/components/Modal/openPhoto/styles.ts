import styled from 'styled-components';

type Props ={
    imageWidth: number,
    imageHeight: number
}

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

export const Modal = styled.div<Props>`
    background-color: #003060;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    
    max-width: ${props => props.imageHeight > props.imageWidth ? '50vh' : '65%'};
    
    .closeImg{
        position: absolute;
        right: 5px;
        top: 5px;
        height: 30px;
        width: 30px;
        cursor: pointer;
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

`;

export const Teste = styled.div`
    
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const DeletePhoto = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: end;
    
    .trash {
        height: 20px;
        width: 20px;
    }
`;