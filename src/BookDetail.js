import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton } from './App'

export function BookDetail({ bookList }) {
  const { bookid } = useParams()

  console.log(bookList)

  const [bookDetailData, setBookDetailData] = useState({})

  const book = bookDetailData

  useEffect(() => {
    fetch(`https://63bf128ae348cb07622060bf.mockapi.io/book/${bookid}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((bookData) => {
        setBookDetailData(bookData)
        console.log(bookData)
      })
  }, [])

  return (
    <div className="book-container">
      <div className="Info-Book-trailer">
        <iframe
          width="560"
          height="315"
          src={book.trailer}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="book-spec-info">
        <h2 className="book-name">{book.name}</h2>

        <p className="book-rating">⭐{book.rating}</p>
      </div>

      {/* <div className='Info-Book-name-rating' ><p>{book.name}⭐{book.rating}</p> </div> */}
      <div className="Info-Book-summary">{book.summary}</div>

      <BackButton />
    </div>
  )
}
