import React from 'react'
import { DogImage } from './DogImage'

export const BreedsSelect = props => {
  const dogSelectListGet = select => {
    fetch(`https://dog.ceo/api/breed/${select}/images/random/10`)
      .then(res => res.json())
      .then(data => {
        props.setSelectedBreedList(data.message)
      })
  }
  return (
    <>
      <div>
        <select
          value={props.selectedBreed}
          onChange={e => props.setSelectedBreed(e.target.value)}
        >
          {props.breeds.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
        <button onClick={() => dogSelectListGet(props.selectedBreed)}>
          表示
        </button>
      </div>
      {props.selectedBreedList.map((data, index) => (
        <DogImage url={data} />
      ))}
    </>
  )
}
