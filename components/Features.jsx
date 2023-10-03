'use client'
import React from 'react'
import Image from 'next/image'
import '../styles/all.css'
import img1 from '../assets/tv.png'
import img2 from '../assets/device-pile.png'
import img3 from '../assets/chil.png'
import img4 from '../assets/boxshot.png'
import img5 from '../assets/mobile-0819.jpg'
import img6 from '../assets/download-icon.gif'







function Features() {
  return (
    <section class="features__container">
        <div class="feature" id="feature">
          <div class="feature__details">
            <h3 class="feature__title">Disfruta en tu TV.</h3>
            <h5 class="feature__sub__title">
              Ve en smart TV ,PlayStation , Xbox , Chromecast , Apple TV ,
              reproductores de Blu-ray y más.
            </h5>
          </div>
          <div class="feature__image__container">
            <Image
              src={img1}
              alt="Feature image"
              class="feature__image"
            />
            <div class="feature__backgroud__video__container">
            <video
                autoplay=""
                loop=""
                muted=""
                class="feature__backgroud__video"
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div class="feature">
          <div class="feature__details">
            <h3 class="feature__title">Disfruta donde quieras</h3>
            <h5 class="feature__sub__title">
              Películas y series ilimitadas en tu teléfono , tablet ,
              computadora y TV.
            </h5>
          </div>
          <div class="feature__image__container feature__3__image__container">
            <Image
              src={img2}
              alt="Feature image"
              class="feature__image feature__3__image"
            />
           <div
              class="feature__backgroud__video__container feature__3__backgroud__video__container"
            >
              <video
                autoplay=""
                loop=""
                muted=""
                class="feature__backgroud__video feature__3__backgroud__video"
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div class="feature">
          <div class="feature__details">
            <h3 class="feature__title">Crea perfiles para niños</h3>
            <h5 class="feature__sub__title">
              Los niños vivirán aventuras con sus personajes favoritos en un
              espacio diseñado exclusivamente para ellos , sin costo con tu
              membresía.
            </h5>
          </div>
          <div class="feature__image__container">
            <Image
              src={img3}
              alt="Feature image"
              class="feature__image"
            />
          </div>
        </div>

        <div class="feature">
          <div class="feature__details">
            <h3 class="feature__title">
              Descarga tus series para verlas offline.
            </h3>
            <h5 class="feature__sub__title">
              Solo disponible en los planes sin anuncios.
            </h5>
          </div>
          <div class="feature__image__container">
            <Image
              src={img5}
              alt="Feature image"
              class="feature__image"
            />
            <div class="feature__2__poster__container">
              <div class="poster__container">
                <Image
                  src={img4}
                  alt="poster"
                  class="poster"
                />
              </div>
              <div class="poster__details">
                <h4>Stranger Things</h4>
                <h6>Downloading...</h6>
              </div>
              <div class="download__gif__container">
                <Image
                  src={img6}
                  alt="downloading gif"
                  class="gif"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features