import styled from 'styled-components';


export const PhotoItem = styled.div`
    background-color: #055C9D;
    border-radius: 10px;
    padding: 5px;
    width: 25%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: imgHeight ;

img {
    max-width: 100%;
    border-radius: 10px;
    cursor: pointer;
}
`;

export const DeletePhoto = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: end;
`;