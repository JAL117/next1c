import React from 'react'
import '../styles/selec.css'
import img1 from '../assets/lawena5.png'
import Image from 'next/image'

function Perfil() {
  return (
    <>
    
    <div class="select__users">
          <div class="user+__one users__text userIt__hv">
            <div class="user__one users__img">
              <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFODe-79HMte1GvxsxPzvEhS4oamceVNh3isrrNF3kcraRbsL9uOcrH0MyKtlmWkLJyKJIxId66coocNnpINTOKpTcQ.png?r=f08" alt="logo de usuários"/>
              <p>Jal</p>
            </div>
          </div>
      
          <div class="user__two users__text userIt__hv">
            <div class="userTwo__img users__img">
              <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFH0VbIGycnpOMaFT5ER1erOVKsxpCLYnZF0-sxIK15G0mY7z7RnNlEEiRFGOOBCJcyB2CEibnXtHsXwNqmcCGg-XlQ.png?r=9fe" alt="logo de usuários"/>
            </div>
            <p>Michel</p>
          </div>
      
          <div class="user__three users__text userIt__hv">
            <div class="userThree__img users__img">
              <img src="https://occ-0-1356-559.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM5PrJX0TiFgfm4HOoS76PWmofnZtjwSQQj-dPSEdzfCr8p8wNhjBwMybzmLIAGotByD810aYhO6nG8N8FMUoXG-sg.png?r=ab" alt="logo de usuários"/>
            </div>
            <p>Isacc</p>
          </div>
      
          <div class="user__kids users__text userIt__hv">
            <div class="userKids__img users__img">
              <img src="https://occ-0-1974-114.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeBsVLjzoPGFTTtfanjc1KoMt9ipBO5cSwPkPx9D4xILoKy9It-3NWYejsHYUocA8L9EEfBB_0HddT6c-Xojr7i-yEvoA_0Gaa-x.png?r=25d"/>
            </div>
            <p>Niños</p>
          </div>
      
          <div class="add__profile">
            <div class="img__addProfile">
              <Image src={img1} alt="adicionar perfil"/>
            </div>
            <p>Adicionar perfil</p>
          </div>
        </div>
    </>

  )
}

export default Perfil