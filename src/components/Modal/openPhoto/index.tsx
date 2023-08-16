import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Photo } from '../../../types/Photo'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
    selectedOpenPhoto: Photo
    setOpenPhotoModal: (v: Boolean) => void
}

export default function OpenPhoto({selectedOpenPhoto, setOpenPhotoModal}: Props) {

  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.src = selectedOpenPhoto.url;

        img.onload = () => {
            setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        };
    }, [selectedOpenPhoto.url]);

  return (
    <S.Container>
        <S.Modal imageWidth={imageDimensions.width} imageHeight={imageDimensions.height}>
            <S.ImgContainer>

                <AiOutlineCloseCircle className='closeImg' onClick={() => setOpenPhotoModal(false)} />
                
                <S.Photo src={selectedOpenPhoto.url} alt={selectedOpenPhoto.name}></S.Photo>

            </S.ImgContainer>
        </S.Modal>
    </S.Container>
  )
}
