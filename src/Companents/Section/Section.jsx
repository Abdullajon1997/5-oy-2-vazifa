import React from 'react'
import "./index.scss"
import one from '../../assets/images/one__img.png';
import two from '../../assets/images/two__img.png';
import three from '../../assets/images/three__img.png';
import four from '../../assets/images/four__img.png';
import five from '../../assets/images/five__img.png';
import six from '../../assets/images/six__img.png';
import seven from '../../assets/images/seven__img.png';
import eight from '../../assets/images/eight.png';
import nine from '../../assets/images/nine.png';
import ellipse from '../../assets/images/Ellipse.png';
import eleven from '../../assets/images/eleven.png';
import pixsel from '../../assets/images/pixsel.png';
import pixsel2 from '../../assets/images/pixsel2.png';
import anak from '../../assets/images/anak.png';
import rutin from '../../assets/images/rutin.png';
import korban from '../../assets/images/korban.png';
import pojok from '../../assets/images/pojok__link.png';
import pojok2 from '../../assets/images/pojok__write.png';
import watsap from '../../assets/images/whatsapp.png';
import search from '../../assets/images/search.png';
import twelve from '../../assets/images/twelve.png';

// Components
import Card from '../Ul/Card/Card';


export default function Section() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="pojok">
            <p className="pojok__p">Pojok Baca <span className="pojok__p__span">Probolinggo</span></p>
            <h1 className="pojok__h1">Pinjam Buku Secara <span className="pojok__h1__span">Gratis</span> untuk Masyarakat</h1>
            <div className='pojok__div'>
              <div className="pjok__div__search">
                <a className='pojok__search' href="#">Cari Judul Buku</a>
                <img src={search} alt="" />
              </div>
              <div className='pojok__link'>
                <a className="pojok__links" href="#">Donasi dengan Kami</a>
                <img src={pojok} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='totto-chan'>

            <div className='left'>
              <div className='left__left'>
                <img className='one' src={one} alt="one" />
                <img className='two' src={two} alt="two" />
              </div>
              <img className='three' src={three} alt="three" />
            </div>
            <img className='four' src={four} alt="four" />
            <div className='right'>
              <img className='five' src={five} alt="five" />
              <div className='right__right'>
                <img className='six' src={six} alt="six" />
                <img className='seven' src={seven} alt="seven" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="kita">
            <h2 className='kita__h2'>Kenapa Kita <span className='kita__h2__span'>Harus</span> Membaca Buku?</h2>
            <div className="kita__inner">
              <Card cardImg={eight} />
              <Card cardImg={nine}/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='judul'>
            <div className="judul__inner">
              <img className='judul__img' src={ellipse} alt="Ellipse" />
              <div>
                <h2 className='judul__h2'>500+</h2>
                <p className='judul__p'>Judul Buku</p>
              </div>
            </div>
            <div className="judul__inner">
              <img className='judul__img' src={ellipse} alt="Ellipse" />
              <div>
                <h2 className='judul__h2'>$0</h2>
                <p className='judul__p'>Gratis Peminjaman</p>
              </div>
            </div>
            <div className="judul__inner">
              <img className='judul__img' src={ellipse} alt="Ellipse" />
              <div>
                <h2 className='judul__h2'>5</h2>
                <p className='judul__p'>Kegiatan Rutin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mereka">
            <div className="mereka__inner">
              <div>
                <h2 className='mereka__h2'>Apa Kata Mereka?</h2>
                <p className='mereka__p'>Mereka yang telah menjadi pengunjung tetap kami</p>
              </div>
              <p className='mereka__p2'>Selengkapnya</p>
            </div>

            <div className="mereka__end">
              <div className='wrapper'>
                <p className='wrapper__p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='wrapper__out'>
                  <img src={eleven} alt="eleven" />
                  <div>
                    <h3 className='wrapper__h3'>Guy Hawkins</h3>
                    <p className='wrapper__p2'>32 Tahun, Karyawan</p>
                  </div>
                </div>
              </div>


              <div className='wrapper'>
                <p className='wrapper__p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='wrapper__out'>
                  <img src={twelve} alt="eleven" />
                  <div>
                    <h3 className='wrapper__h3'>Brooklyn Simmons</h3>
                    <p className='wrapper__p2'>20 Tahun, Mahasiswa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='pixsel'>
              <img src={pixsel} alt="pixsel" />
              <img src={pixsel2} alt="pixsel" />
              <img src={pixsel2} alt="pixsel" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="basa__inner">
            <div>
              <h2 className='basa__h2'>Kegiatan Pojok Baca Probolinggo</h2>
              <p className='basa__p'>Intip kegiatan yang telah kami selenggarakan </p>
            </div>
            <p className='basa__p2'>Selengkapnya</p>

          </div>
          <div className='basa'>
            <img src={anak} alt="img" />
            <img src={rutin} alt="img" />
            <img src={korban} alt="img" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className='membantu__h2'>Ingin <span className='membantu__h2__span'>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>
          <p className='membantu__p'>Percayakan melalui kegiatan kita</p>
          <div className='membantu__div__link'>
            <a className='membantu__div__links' href="#">Donasi dengan Kami</a>
            <img className='membantu__div__link__img' src={pojok2} alt="rasm" />
          </div>
          <span className='atou'>Atou</span>
          <div className='tel__div'>
            <a className='tel__div__link' href="#">Hubungi Kami</a>
            <img className='tel__div__img' src={watsap} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
