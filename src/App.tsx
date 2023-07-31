import React, { useEffect, useState } from 'react'
import * as S from './App.styles'
import { getAll } from './services/photo'
import { Photo } from './types/Photo'
import * as Photos from './services/photo'
import PhotoItem from './components/PhotoItem/PhotoItem'
import { url } from 'inspector'

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loadingImages, setLoadingImages] = useState<Boolean>(false)
  const [loadingUpload, setLoadingUpload] = useState<Boolean>(false)

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = async () => {
    setPhotos(await Photos.getAll())
  }

  return (
    <S.MainContainer>
      <S.Header>
        Galeria de Fotos
      </S.Header>
      <S.UploadFile>
        <input type="file" name="image" />
        <input type="submit" value="Enviar" />
      </S.UploadFile>
      <S.Section>

        {!loadingImages && photos.length > 0 && photos.map((item, index) => (
          <PhotoItem key={index} name={item.name} url={item.url}></PhotoItem>
        ))}


      </S.Section>
    </S.MainContainer>
  )
}
