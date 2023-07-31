import React from 'react'

type Props = {
    name: string,
    url:string
}

export default function PhotoItem({name, url}: Props) {
  return (
    <div>
        <img src={url} alt={name} />
        {name}
    </div>
    
  )
}
