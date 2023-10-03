import React from 'react'
import '../styles/all.css'
import Accordion from './ArcordeonPreguntas'
function FooterP() {
  return (
<>

  <Accordion></Accordion>

    <footer>
    <div class="footer__row__1">
      <h4>
        ¿Preguntas? Llama al
        <a href="" >800 953 1430</a>
      </h4>
    </div>
    <div class="footer__row__2">
      <div class="column__1">
        <ul>
          <li><a href="">Preguntas frecuentes</a></li>
          <li><a href="">Relaciones con inversionistas</a></li>
          <li><a href="">Comprar tarjetas de regalos</a></li>
          <li><a href="">Preferencias de cookies</a></li>
          <li><a href="">Avisos legales</a></li>
        </ul>
      </div>
      <div class="column__2">
        <ul>
          <li><a href="">Centro de ayuda</a></li>
          <li><a href="">Empleo</a></li>
          <li><a href="">Formas de ver</a></li>
          <li><a href="">Información corporativa</a></li>
          <li><a href="">Solo en Netflix</a></li>
        </ul>
      </div>
      <div class="column__3">
        <ul>
          <li><a href="">Cuenta</a></li>
          <li><a href="">Tienda de Netflix</a></li>
          <li><a href="">Términos de uso</a></li>
          <li><a href="">Contáctanos</a></li>
        </ul>
      </div>
      <div class="column__4">
        <ul>
          <li><a href="">Prensa</a></li>
          <li><a href="">Canjear tarjetas de regalo</a></li>
          <li><a href="">Privacidad</a></li>
          <li><a href="">Prueba de velocidad</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__row__3">
      <div class="dropdown__container">
        <i class="fas fa-globe"></i>
        <select
          name="languages"
          id="languagesSelect"
          class="language__drop__down"
        >
          <option value="english" selected>Español</option>
          <option value="hindi">English</option>
        </select>
      </div>
    </div>
    <div class="footer__row__4">
      <p>Netflix Mexico</p>
    </div>
  </footer>

</>
  )
}

export default FooterP