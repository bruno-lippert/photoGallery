import React from 'react'
import * as S from './styles'

type Props = {
  text: String
}

export default function Modal({text}: Props) {
  return (
    <S.Modal className='modal'>
        {text}
    </S.Modal>
  )
}
