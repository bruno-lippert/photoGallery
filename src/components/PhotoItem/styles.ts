import styled from 'styled-components';

export const PhotoItem = styled.div`
    background-color: #055C9D;
    border-radius: 10px;
    padding: 5px;
    width: 100%
    margin 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

img {
    width: 100%;
    border-radius: 10px;
}
`;

export const DeletePhoto = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: end;
`;