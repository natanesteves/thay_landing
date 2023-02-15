import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {
  const clients = [
    {
      Title:"27/2 - Segunda feira - Aula 1 Os três pilares da prescrição na Odontologia",
      review:
        "Dentista, não importa qual a sua especialidade: saber prescrever é essencial! No nosso primeiro encontro, vamos falar sobre como você pode fazer uma prescrição mais eficiente e segura em sua rotina clínica.",
    },
    {
      Title:"28/2 - Terça-feira - A farmácia do dentista - Aula 2",
      review:
        " Muitas vezes desconhecemos todos os recursos farmacológicos que podemos usar na nossa clínica. Nessa aula, você vai conhecer todas as possibilidades de terapêutica medicamentosa que podemos lançar mão para melhorar nossos resultados clínicos.",
    },
    {
      Title:"01/03 - Quarta-feira - Pacientes e seus medicamentos: o desafio do dentista do século XXI",
      review:
        " No nosso último dia de imersão, vamos conversar sobre um problema super atual: os nossos pacientes polimedicados. Você vai entender o que são interações medicamentosas e conhecer as principais consequências no atendimento de pacientes que usam medicamentos cronicamente.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Mais sobre os dias de aula: </span>
       
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <h2>{client.Title}</h2>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;