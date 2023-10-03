import React from 'react'
import '../styles/all.css'
import '../styles/login.css'
import img1 from '../assets/Netflix_2015_logo.svg.png'
import Image from 'next/image'
import Link from 'next/link'


function HeaderL() {
  return (
    
    <div class="header">
    <div class="logo">
        <Link href="/">
            <Image src={img1} alt=""></Image>
        </Link>
    </div>
</div>


  )
}

export default HeaderL