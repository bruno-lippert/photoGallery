import {ref, listAll, getDownloadURL, uploadBytes, deleteObject} from 'firebase/storage';
import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase';
import {v4 as createId} from 'uuid';
import { error } from 'console';

export async function getAll() {
    const list: Photo[] = []

    const imagesFolder = ref(storage, 'images')
    const photoList = await listAll(imagesFolder)

    for(let i in photoList.items) {
        const photoUrl = await getDownloadURL(photoList.items[i])

        list.push({name: photoList.items[i].name, url: photoUrl})
    }

    return list
}

export const uploadFile = async (file: File) => {
    if([`image/jpg`, `image/jpeg`, `image/png`].includes(file.type)) {

        const imageId = createId()
        const newFile = ref(storage, `images/${imageId}`)
        const upload = await uploadBytes(newFile, file)
        const photoUrl = await getDownloadURL(upload.ref)

        return { name: upload.ref.name, url:photoUrl} as Photo
    } else {
        return new Error('Tipo de arquivo inválido!')
    }
}

export const deletePhoto = async (photo: Photo) => {
    const photoRef = ref(storage, `images/${photo.name}`)
    deleteObject(photoRef).then(() => {
    }).catch((error) => {
        alert(`Erro ao deletar foto!`)
    })
}
