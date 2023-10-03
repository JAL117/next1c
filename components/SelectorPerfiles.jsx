import React from 'react'
import '../styles/selec.css'
import Perfil from './Perfil'
import NavSelectorPerfiles from './NavSelectorPerfiles'
import FooterSelectorPerfiles from './FooterSelectorPerfiles'
import HeaderSelectorPerfiles from './HeaderSelectorPerfiles'

function Selector() {
  return (
   <>
    <div class="main__content">
      <NavSelectorPerfiles></NavSelectorPerfiles>
      <HeaderSelectorPerfiles></HeaderSelectorPerfiles>
      <Perfil></Perfil>
      <FooterSelectorPerfiles></FooterSelectorPerfiles>


    </div>
   </>
  )
}

export default Selector