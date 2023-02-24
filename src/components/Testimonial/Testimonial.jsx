import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {
  const clients = [
    {
      date:"06/03",
      day:"Segunda feira",
      Title:"    Aula 1 Os três pilares da prescrição na Odontologia",
      review:
        "Dentista, não importa qual a sua especialidade: saber prescrever é essencial! No nosso primeiro encontro, vamos falar sobre como você pode fazer uma prescrição mais eficiente e segura em sua rotina clínica.",
    },
    {
      date:"07/03",
      day:"Terça-feira ",
      Title:"   A farmácia do dentista - Aula 2",
      review:
        " Muitas vezes desconhecemos todos os recursos farmacológicos que podemos usar na nossa clínica. Nessa aula, você vai conhecer todas as possibilidades de terapêutica medicamentosa que podemos lançar mão para melhorar nossos resultados clínicos.",
    },
    {
      date:"08/03",
      day:"Quarta-feira",
      Title:" Pacientes e seus medicamentos: o desafio do dentista do século XXI",
      review:
        " No nosso último dia de imersão, vamos conversar sobre um problema super atual: os nossos pacientes polimedicados. Você vai entender o que são interações medicamentosas e conhecer as principais consequências no atendimento de pacientes que usam medicamentos cronicamente.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Confira nossos temas e datas: </span>
       
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      
        {clients.map((client, index) => {
          return (
          
              <div className="testimonial">
                <h3 className="t-date">{client.date}</h3>
                <h3 className="t-day">{client.day}</h3>
                <h2>{client.Title}</h2>
                <span>{client.review}</span>
              </div>
            
          );
        })}
      
    </div>
  );
};

export default Testimonial;