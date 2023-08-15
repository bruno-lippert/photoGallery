import React from 'react'
import * as S from './styles'

export default function DeletePhotoModal() {
  return (
    <S.Container>
        <S.Modal>
            <S.Text>Excluír a foto?</S.Text>
            <S.ContainerOptions>
                <S.Option>Sim</S.Option>
            <S.Option>Não</S.Option>
            </S.ContainerOptions>
            
        </S.Modal>
    </S.Container>
  )
}
