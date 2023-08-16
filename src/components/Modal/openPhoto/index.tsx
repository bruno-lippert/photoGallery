import React from 'react'
import * as S from './styles'
import { Photo } from '../../../types/Photo'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
    selectedOpenPhoto: Photo
}

export default function OpenPhoto({selectedOpenPhoto}: Props) {
  return (
    <S.Container>
        <S.Modal>
            <S.ImgContainer>

                <AiOutlineCloseCircle className='closeImg' />
                
                <S.Photo src={selectedOpenPhoto.url} alt={selectedOpenPhoto.name}></S.Photo>

            </S.ImgContainer>
        </S.Modal>
    </S.Container>
  )
}
