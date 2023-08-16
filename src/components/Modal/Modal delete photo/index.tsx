import React from 'react'
import * as S from './styles'
import { Photo } from '../../../types/Photo'

type Props = {
    setDeleteModal: (v: Boolean) => void,
    deletePhoto: (photo: Photo) => void,
    selectedPhotoDelete: Photo 
}

export default function DeletePhotoModal({setDeleteModal, deletePhoto, selectedPhotoDelete}: Props) {
  return (
    <S.Container>
        <S.Modal>
            <S.Text>Excluír a foto?</S.Text>
            <S.ContainerOptions>
                <S.Option onClick={() => deletePhoto(selectedPhotoDelete)}>Sim</S.Option>
            <S.Option onClick={() => setDeleteModal(false)}>Não</S.Option>
            </S.ContainerOptions>
            
        </S.Modal>
    </S.Container>
  )
}
