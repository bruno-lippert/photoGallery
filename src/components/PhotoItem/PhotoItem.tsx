import React from 'react'
import * as S from './styles'
import { GoTrash } from 'react-icons/go'
import { Photo } from '../../types/Photo'

type Props = {
    name: string,
    url:string,
    deletePhoto: (photo: Photo) => void
}

export default function PhotoItem({name, url, deletePhoto}: Props) {
  return (
    <S.PhotoItem>
        <img src={url} alt={name} />
        <S.DeletePhoto onClick={() => deletePhoto({name:name, url:url})}>
          <GoTrash/>
        </S.DeletePhoto>
    </S.PhotoItem>
    
  )
}
