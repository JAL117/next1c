"use client"
import React, { useState } from 'react';

const data = [
  {
    question: '¿Qué es Netflix?',
    answer:<>
    <p>
      Netflix es un servicio de streaming que ofrece una gran variedad
      de peliculas , series y documentales premiados en casi cualquier
      pantalla conectada a internet.
    </p>
    <p>
      Todo lo que quieras ver , a un costo mensual muy accesible.
      Siempre hay algo nuevo por descubrir, ¡y todas las semanas se
      agregan más películas y series!
    </p>
  </>
  },
  {
    question: '¿Cuánto cuesta Netflix?',
    answer:  <>
    <p>
      Disfruta Netflix en tu smartphone, tablet , smart TV , laptop o
      dispositivo de streaming , todo por una tarifa plana
      mensual.Planes desde $99 hasta $299 al mes. Sin costo
      adicionales ni contratos.
    </p>
  </>
  },
  {
    question: '¿Donde puedo ver Netflix?',
    answer: <>
    <p>
      Disfruta donde quieras , cuando quieras. Inicia sesión en tu
      cuenta de Netflix para ver contenido al instante a traves de
      netflix.com desde tu computadora personal o en cualquier
      dispositivo con conexion a internet que cuente con la app de
      Netflix , como smart TV , smartphones , tablets , reproductores
      multimedia y consolas de juegos
    </p>
    <p>
      Ademas , puedes descargar tus series favoritas con iOS , Android
      o la app para Windows 10. Con la funcion de descarga , puedes
      ver donde vayas y sin conexion a internet . Lleva Netflix
      contigo donde sea.
    </p>
  </>
  },
  {
    question: '¿Como cancelo?',
    answer:  <>
    <p>
      Netflix es flexible. Sin contratos molestos ni compromisos.
      Cancela la membresia online con solo dos clics. No hay recargos
      por cancelacion . Empieza y termina cuando quieras.
    </p>
  </>
  },
  {
    question: '¿Que puedo ver en Netflix?',
    answer:     <>
    <p>
      Netflix tiene un amplio catalogo de peliculas , series ,
      documentales ,animes , originales premiadops y mas . Todo lo que
      quieras ver, cuando quieras.
    </p>
  </>
  },
  {
    question: '¿Es bueno Netflix para los niños?',
    answer:  <>
    <p>
      La experiencia de Netflix para niños esta incluida en la
      membresía para que los padres tengan control mientras los peques
      disfrutan series y películas familiares en su propio espacio.
    </p>
    <p>
      Los perfiles para niños incluyen controles parentales protegidos
      por PIN que te permiten restringir el contenido que pueden ver
      los niños en funcion de la clasificacion por edad y bloquear
      determinados titulos que no quieras que los niños vean.
    </p>
  </>
  },
  
];

function Faq() {
  const [accordianState, setAccordianState] = useState({});

  const toggleAccordian = (index) => {
    setAccordianState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="FAQ__list__container">
      <h1 className="FAQ__heading">Preguntas frecuentes</h1>
      <div className="FAQ__list">
        {data.map((item, index) => (
          <div className="FAQ__accordian" key={index}>
            <button
              className={`FAQ__title ${accordianState[index] ? 'open' : ''}`}
              onClick={() => toggleAccordian(index)}
            >
              {item.question}
              <span className="arrow">{accordianState[index] ? 'x' : '+'}</span>
            </button>
            <div
              className="FAQ__visible"
              style={{
                maxHeight: accordianState[index] ? '1000px' : '0',
                overflow: 'hidden',
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="FAQ__get__started__email">
        <h3>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </h3>
        <div className="email__form__container">
          <div className="form__container">
            <input type="email" className="email__input" placeholder="Email" />
          </div>
          <button className="primary__button">
            Comenzar<i className="fal fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Faq;
