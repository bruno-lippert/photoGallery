import React from 'react'
import * as S from './styles'
import { GoTrash } from 'react-icons/go'
import { Photo } from '../../types/Photo'

type Props = {
    name: string,
    url:string,
    setDeleteModal: (v: Boolean) => void,
    getPhotoData: (photo: Photo) => void
}

export default function PhotoItem({name, url, getPhotoData}: Props) {
  return (
    <S.PhotoItem>
        <img src={url} alt={name} />
        <S.DeletePhoto onClick={() => getPhotoData({name: name, url: url})}>
          <GoTrash/>
        </S.DeletePhoto>
    </S.PhotoItem>
    
  )
}

// onClick={() => deletePhoto({name:name, url:url})
