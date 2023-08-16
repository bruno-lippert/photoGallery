import React from 'react'
import * as S from './styles'
import { Photo } from '../../../types/Photo'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
    selectedOpenPhoto: Photo
    setOpenPhotoModal: (v: Boolean) => void
}

export default function OpenPhoto({selectedOpenPhoto, setOpenPhotoModal}: Props) {
  return (
    <S.Container>
        <S.Modal>
            <S.ImgContainer>

                <AiOutlineCloseCircle className='closeImg' onClick={() => setOpenPhotoModal(false)} />
                
                <S.Photo src={selectedOpenPhoto.url} alt={selectedOpenPhoto.name}></S.Photo>

            </S.ImgContainer>
        </S.Modal>
    </S.Container>
  )
}
