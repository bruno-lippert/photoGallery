import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { Photo } from '../../../types/Photo'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GoTrash } from 'react-icons/go'

type Props = {
  selectedOpenPhoto: Photo
  setOpenPhotoModal: (v: Boolean) => void,
  setDeleteModal: (v: Boolean) => void,
  getPhotoData: (photo: Photo) => void
}

export default function OpenPhoto({ selectedOpenPhoto, setOpenPhotoModal, setDeleteModal, getPhotoData }: Props) {

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

        <AiOutlineCloseCircle className='closeImg' onClick={() => setOpenPhotoModal(false)} />

        <S.ImgContainer>


          <S.Photo src={selectedOpenPhoto.url} alt={selectedOpenPhoto.name}></S.Photo>

          <S.DeletePhoto onClick={() => {
            setOpenPhotoModal(false);
            setDeleteModal(true);
            getPhotoData(selectedOpenPhoto)
          }}>
            <GoTrash className='trash' />
          </S.DeletePhoto>

        </S.ImgContainer>
      </S.Modal>
    </S.Container>
  )
}
