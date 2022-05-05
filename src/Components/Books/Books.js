import React from 'react'
import './Books.css'
import SingleBook from '../Book/SingleBook'

function Books({books}) {
 


  return (
    <div className='books'>
        {books.map((book)=>(
            <SingleBook            
             key={book.rank}
              rank={book.rank}
               title={book.title}
                img={book.book_image}
                 author={book.author}
                  description={book.description} />
        ))}     
    </div>
  )
}

export default Books