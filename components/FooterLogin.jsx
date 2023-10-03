import React from 'react'
import '../styles/all.css'
import '../styles/login.css'

function FooterL() {
  return (
    <div>

<footer class="foot">
      <div class="footer__row__1">
        <h4>¿Preguntas?Llama al 800 953 1430</h4>
      </div>
      <div class="footer__row__2">
        <div class="column__1">
            <ul>
                <li><a href="">Preguntas frecuentes</a></li>
                <li><a href="">Privacidad</a></li>
            </ul>

       </div>
        <div class="column__2">
            <ul>
                <li><a href="">Centro de ayuda</a></li>
                <li><a href="">Preferencias de cookies</a></li>
            </ul>
     
        </div>
        <div class="column__3">
            <ul>
                <li><a href="">Tienda de Netflix</a></li>
                <li><a href="">Información corporativa</a></li>
            </ul>
    
        </div>
        <div class="column__4">
            <ul>
                <li><a href="">Términos de uso</a></li>
              
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
    
    </footer>


    </div>
  )
}

export default FooterL