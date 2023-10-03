
import React from 'react'
import Image from 'next/image'
import "../styles/all.css"
import img1 from '../assets/MX-es-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'


function Hero() {
  return (
    <section class="hero">
        <div>
<div class="hero__bg__image__container">
          <Image
            src={img1}
            alt="BG hero image"
            class="hero__bg__image"
          />
        </div>
        <div class="hero__bg__overlay"></div>

        <div class="hero__card">
          <h1 class="hero__title">
            Los títulos mexicanos e internacionales de mayor éxito. Las mejores
            historias. Todo en Netflix.
          </h1>
          <p class="hero__subtitle">Únete hoy. Cancela cuando quieras.</p>
          <p class="hero__description">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>

          <div class="email__form__container">
            <div class="form__container">
              <input type="email" class="email__input" placeholder="Email " />
              <button class="primary__button">
              Comenzar
            </button>
            </div>
            
          </div>
      
        </div>   
       
        </div>
        
      </section>
  )
}

export default Hero