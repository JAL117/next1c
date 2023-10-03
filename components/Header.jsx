"use client"
import React from 'react'
import '../styles/all.css'
import Image from 'next/image';
import img1 from '../assets/Netflix_2015_logo.svg.png'
import Link from 'next/link';
import img2 from '../assets/log3.jpg'

function Header() {
  return (
    <header>
      <nav class="navbar">
        <div class="navbar__brand">
          <Image
            src={img1}
            alt="logo"
            class="brand__logo"
          />
        </div>

        <div class="navbar__nav__items">
          <div class="nav__item">
            <div class="dropdown__container">
              
              <select
                name="languages"
                id="languagesSelect"
                class="language__drop__down"
              >
                <option value="english"  >
                  Español
                </option>
                <option value="hindi">Ingles</option>
              </select>
            </div>
          </div>

          <div class="nav__item">
            <button class="signin__button">
              <Link href="/login">Iniciar sesión</Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header