import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
     <img 
     className='nav__img'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6bBmmjxaMpoKMDYjS5QIKdVSdgnULxaz4w&usqp=CAU'
      alt='logo'/>
      <h3 className='nav__header'>Books</h3>
    </div>
  )
}

export default Navbar