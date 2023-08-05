import React, { FormEvent, useEffect, useState } from 'react'
import * as S from './App.styles'
import { getAll } from './services/photo'
import { Photo } from './types/Photo'
import * as Photos from './services/photo'
import PhotoItem from './components/PhotoItem/PhotoItem'
import { storage } from './libs/firebase'

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loadingImages, setLoadingImages] = useState<Boolean>(false)
  const [loadingUpload, setLoadingUpload] = useState<Boolean>(false)

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = async () => {
    setLoadingImages(true)
    setPhotos(await Photos.getAll())
    setLoadingImages(false)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    if(file && file.size > 0){
      setLoadingUpload(true)
      const result = await Photos.uploadFile(file)
      setLoadingUpload(false)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        const newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    } else{
      alert('Nenhum arquivo selecionado')
    }
    
  }

  const handleDeletePhoto = async (photo: Photo) => {
    const newPhotos = [...photos]
    const index = newPhotos.findIndex((image) => image.name == photo.name)
    newPhotos.splice(index, 1)
    setPhotos(newPhotos)

    await Photos.deletePhoto(photo)
  }

  return (
    <S.MainContainer>
      <S.Header>
        Galeria de Fotos
      </S.Header>
      <S.UploadFile method='POST' onSubmit={handleFormSubmit}>
        <input type="file" name="image" />
        <input type="submit" value="Enviar" />
      </S.UploadFile>
      <S.MainContent>

        {loadingImages && <div>Carregando...</div>}

        {!loadingImages && photos.length > 0 && 
        <S.PhotoGrid>
            {photos.map((item, index) => (
          
            <PhotoItem key={index} name={item.name} url={item.url} deletePhoto={handleDeletePhoto}/>
            
          
        ))}</S.PhotoGrid>
            }


      </S.MainContent>
    </S.MainContainer>
  )
}
