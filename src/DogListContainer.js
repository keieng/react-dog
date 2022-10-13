import React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [selectedBreedList, setSelectedBreedList] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
        setSelectedBreed(Object.keys(data.message)[0])
      })
  }, [])

  return (
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      setSelectedBreed={setSelectedBreed}
      selectedBreedList={selectedBreedList}
      setSelectedBreedList={setSelectedBreedList}
    />
  )
}
