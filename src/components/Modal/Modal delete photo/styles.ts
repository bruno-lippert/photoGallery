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
`;

export const Text = styled.p`
    margin: 0;
    padding-bottom: 10px;
`;

export const ContainerOptions = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Option = styled.span`
    cursor: pointer;   
`;