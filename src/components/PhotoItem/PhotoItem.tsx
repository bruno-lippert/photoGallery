import React from 'react'
import * as S from './styles'

type Props = {
    name: string,
    url:string
}

export default function PhotoItem({name, url}: Props) {
  return (
    <S.PhotoItem>
        <img src={url} alt={name} />
    </S.PhotoItem>
    
  )
}
