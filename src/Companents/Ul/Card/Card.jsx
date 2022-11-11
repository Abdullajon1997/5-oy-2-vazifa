import React from 'react'
import "./index.scss"

export default function Card({cardImg}) {
  return (
    <div className='card'>
      <p className='card__p'>“Cuma perlu <span className='card__p__span'>satu buku</span> untuk jatuh cinta pada membaca, Cari Buku itu! <span className='card__p__span'>Mari jatuh cinta!</span></p>
      <div className='card__inner'>
        <img className='card__img' src={cardImg} alt="seven" />
        <div>
          <h3 className='card__h3'>Najwa Shihab</h3>
          <p className='card__p2'>Duta Membaca</p>
        </div>
      </div>
    </div>
  )
}
