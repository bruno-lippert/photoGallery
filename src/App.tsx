import React, { FormEvent, useEffect, useState } from 'react'
import * as S from './App.styles'
import { getAll } from './services/photo'
import { Photo } from './types/Photo'
import * as Photos from './services/photo'
import PhotoItem from './components/PhotoItem/PhotoItem'
import { storage } from './libs/firebase'
import Modal from './components/Modal/Modal'

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loadingImages, setLoadingImages] = useState<Boolean>(false)
  const [loadingUpload, setLoadingUpload] = useState<Boolean>(false)
  const [modal, setModal] = useState<Boolean>(false)
  const [modalText, setModalText] = useState<String>('')

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
        openModal()
        setModalText('Foto enviada!')
      }
    } else{
      alert('Nenhum arquivo selecionado')
    }
    
  }

  const handleDeletePhoto = async (photo: Photo) => {
    
    await Photos.deletePhoto(photo)

    openModal()
    setModalText('Foto deletada!')
    
    const newPhotos = [...photos]
    const index = newPhotos.findIndex((image) => image.name == photo.name)
    newPhotos.splice(index, 1)
    setPhotos(newPhotos)
  }

  const openModal = () => {
    setModal(true)

    setTimeout(() => {
      setModal(false)
    }, 3000)
  }

  return (
    <S.MainContainer className='mainContainer'>
      <S.Header className='header'>
        Galeria de Fotos
      </S.Header>
      <S.UploadFile method='POST' onSubmit={handleFormSubmit} className='uploadFile'>
        <input type="file" name="image" />
        <input type="submit" value="Enviar" />

        {loadingUpload && <div>Enviando...</div>}

      </S.UploadFile>
      <S.MainContent>

        {loadingImages && <div>Carregando...</div>}

        {!loadingImages && photos.length > 0 && 
        <S.PhotoGrid className='photoGrid'>
            {photos.map((item, index) => (
          
            <PhotoItem key={index} name={item.name} url={item.url} deletePhoto={handleDeletePhoto}/>
            
        ))}</S.PhotoGrid>
            }


      </S.MainContent>
        {modal &&  <Modal text={modalText}/>}
    </S.MainContainer>
  )
}
