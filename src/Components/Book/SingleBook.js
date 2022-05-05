import React from 'react';
import './SingleBook.css'

function SingleBook({title,description,img,author,rank}) {

   

  return (
    <div className='book'>
        <div className='title'>
        <h3>{title}</h3>
        <p>{rank}</p>
        </div>
        <img 
        className='book__image'
        src={`${img}`}
        alt='bookImage'/>
         <div className='description'>
        <h5>{author}</h5>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default SingleBook;