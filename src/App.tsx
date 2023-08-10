import React, { FormEvent, useEffect, useState } from 'react'
import * as S from './App.styles'
import { Photo } from './types/Photo'
import * as Photos from './services/photo'
import PhotoItem from './components/PhotoItem/PhotoItem'
import Modal from './components/Modal/Modal'

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loadingImages, setLoadingImages] = useState<Boolean>(false)
  const [loadingUpload, setLoadingUpload] = useState<Boolean>(false)
  const [modal, setModal] = useState<Boolean>(false)
  const [modalText, setModalText] = useState<String>('')
  const [selectedFileName, setSelectedFileName] = useState<string>('Escolha um arquivo');


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
        setSelectedFileName('Escolha um arquivo')
        
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        fileInput.value = ''; // Redefine o valor do input para vazio
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

const fileInput = document.getElementById('fileInput');

  return (
    <S.MainContainer className='mainContainer'>
      <S.Header className='header'>
        Galeria de Fotos
      </S.Header>
      <S.UploadFile method='POST' onSubmit={handleFormSubmit} className='uploadFile'>
        <input 
          type="file" 
          name="image" 
          id='fileInput'
          onChange={(e) => {const selectedFile = e.target.files?.[0];
            setSelectedFileName(selectedFile ? selectedFile.name : 'Escolha um arquivo');
        }}/>
        <label htmlFor="fileInput" className="custom-file-label" id="fileLabel">{selectedFileName}</label>
        <input type="submit" value="Enviar" />

        {loadingUpload && <div>Enviando...</div>}

      </S.UploadFile>
      <S.MainContent>

        {loadingImages && <div className='loading'>Carregando...</div>}

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
