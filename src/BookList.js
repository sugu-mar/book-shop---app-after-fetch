import React, { useState, useEffect } from 'react'
import { Book } from './Book'
import { API } from './global'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { addMethod } from 'yup'

export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const getBook = () => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((bookData) => {
        setBookList(bookData)
      })
  }

  useEffect(() => getBook(), [])

  const [bookList, setBookList] = useState([])

  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book
          key={index}
          book={bk}
          id={bk.id}
          deleteButton={
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => {
                fetch(
                  `https://63bf128ae348cb07622060bf.mockapi.io/book/${bk.id}`,
                  {
                    method: 'DELETE',
                  },
                ).then(() => getBook())
              }}
            >
              <DeleteIcon fontSize="inherit" color="error" />
            </IconButton>
          }
        />
      ))}
    </div>
  )
}
