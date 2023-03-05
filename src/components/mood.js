import React from 'react'
import "../styles/mood.scss";

export const Mood = ({name}) => {
  return (
    <div className='container-mood'>
        <h3 className='name'>{name}</h3>

    </div>
  )
}
