import React from 'react'
import "./index.scss"
import logo from "../../assets/images/LOGO.png"

export default function Header() {
  return (
    <>

      <header className='header__inner'>
        <div className="container">
          <nav className="navbar">
            <a className='navbar__link' href="#"><img src={logo} alt="LOGO" /></a>
            <ul className="navbar__list">
              <li className="navbar__list__item"><a className='navbar__list__item__li' href="#Beranda"></a></li>
              <li className="navbar__list__item"><a className='navbar__list__item__li' href="#">Koleksi</a></li>
              <li className="navbar__list__item"><a className='navbar__list__item__li' href="#">Syarat dan Ketentuan</a></li>
              <li className="navbar__list__item"><a className='navbar__list__item__li' href="#">Kontak</a></li>
              <li className="navbar__list__item"><a className="navbar__list__item__link" href="#">Masuk</a></li>
            </ul>
          </nav>
        </div>
      </header>

    </>
  )
}
