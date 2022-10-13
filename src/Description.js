import React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/puggle/IMG_074816.jpg',
  )
  const dogApi = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <>
      <div>Best Dog of the Day</div>
      <DogImage url={dogUrl} />
      <div>
        <button type="button" onClick={() => dogApi()}>
          更新
        </button>
      </div>
    </>
  )
}
