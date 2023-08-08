import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    bottom: 25px;
    right: 25px;
    background-color: #055C9D;
    width: 15%;
    padding: 10px;
    text-align: center;
    border-radius: 10px;

    @media (max-width: 350px) {
        width: 25%;
    }
`;