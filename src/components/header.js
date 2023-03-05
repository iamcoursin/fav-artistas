import '../styles/header.scss';
import React from 'react'

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Artistas favoritos</h1>
      </div>
      <div className="navbar">
        <p>Gênero</p>
      </div>
    </header>
  )
}
