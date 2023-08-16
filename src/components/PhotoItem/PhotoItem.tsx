import React from 'react'
import * as S from './styles'
import { GoTrash } from 'react-icons/go'
import { Photo } from '../../types/Photo'

type Props = {
    name: string,
    url:string,
    setDeleteModal: (v: Boolean) => void,
    getPhotoData: (photo: Photo) => void,
    setOpenPhotoModal: (v: Boolean) => void
}

export default function PhotoItem({name, url, getPhotoData, setOpenPhotoModal, setDeleteModal}: Props) {
  return (
    <S.PhotoItem>
        <img src={url} alt={name} onClick={() => { setOpenPhotoModal(true); getPhotoData({name: name, url: url}) }}/>
        <S.DeletePhoto onClick={() => { setDeleteModal(true); getPhotoData({name: name, url: url}) }}>
          <GoTrash/>
        </S.DeletePhoto>
    </S.PhotoItem>
    
  )
}

// onClick={() => deletePhoto({name:name, url:url})
