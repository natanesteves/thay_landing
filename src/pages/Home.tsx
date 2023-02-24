// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";

import { Doubts } from "../components/Doubts";
import Testimonial from "../components/Testimonial/Testimonial";
// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";

// Images
let NFT = require("../assets/DSC_0223.png");

export function Home() {
  return (
    <main>
      <section className="presentation">
        <div className="container">
          <div className="descriptionPresentation">
            <h1>O Dentista e a Farmacologia </h1>
            <p>
            O dia a dia do dentista é repleto de desafios e a prescrição medicamentosa é uma das maiores dúvidas dos profissionais. Entre protocolos e receitas prontas, nos deparamos com casos desafiadores, interações medicamentosas e manifestações orais e sistêmicas do uso de medicamentos. Na hora da prescrição, pode bater aquela dúvida: posso indicar esse medicamento? Como orientar seu uso?

Pensando nisso, resolvi declarar oficialmente aberta a semana do dentista prescritor!
            </p>
          </div>
          <div className="imgPresentation"></div>
        </div>
      </section>

      <section className="whatWeDo" id="whatWeDo">
        <div className="title">
          <h1>O Evento</h1>
        </div>

        <div className="container">
          <div className="nftImg">
            <img src={NFT} alt="NFT" />
          </div>
          <div className="boxsInformation">
            <div className="boxInformation one">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1 className="boxtitle">Os Dias</h1>
              <p>
              Serão 3 dias de uma imersão no mundo da Farmacologia aplicada à Clínica Odontológica, com aulas de duração aproximada de 1 hora.
              </p>
            </div>
            <div className="boxInformation two">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>O assunto</h1>
              <p>
              Vamos falar sobre a importância do conhecimento em farmacologia para uma prática clínica segura e responsável.
              </p>
            </div>
            <div className="boxInformation three">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>O público-alvo</h1>
              <p>As aulas são voltadas para todos os interessados em farmacologia, em especial, alunos de graduação e  pós-graduação em Odontologia e dentistas.</p>
            </div>
            <div className="boxInformation four">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>O local</h1>
              <p>Nosso encontro acontecerá no Youtube, no canal <a href="https://www.youtube.com/channel/UCYdKtFDfeBYQqEbr3GDfJAw">@farmacodontologia</a>, sempre às 20:23. O link será enviado para o email cadastrado na inscrição, 1 hora antes.</p>
            </div>
            
          </div>
        </div>
      </section>
 <Testimonial />


      <section className="propose" id="propose">
         <a href="https://chat.whatsapp.com/DWc4jDcebXF6BXWwhc9xfI">
        <Button text={"Entre no Grupo do WhatsApp"}></Button></a>
        <div className="container">

          <div className="imgPropose"></div>
          <div className="descriptionPropose">
            <h1>Quem sou eu:</h1>
            <p>
            Olá! Eu me chamo Thayanne Calcia, sou professora de Terapêutica Medicamentosa aplicada à Odontologia. Sou dentista, mestre e doutora com mais de 10 anos de experiência no ensino e no estudo da Farmacologia. Sou especializada em Estomatologia e DTM/Dor Orofacial, áreas nas quais atuo clinicamente. Diariamente, me dedico a simplificar o entendimento da Farmacologia Clínica na Odontologia, disciplina que é considerada bastante desafiadora.
            </p>
          </div>
        </div>
      </section>

     
      <section className="propose" id="propose">
        <div className="container">
          <div className="imgPropose2"></div>
          <div className="descriptionPropose">
            <h1>Investimento</h1>
            <p>
            O evento será totalmente  <strong > gratuito!</strong> As aulas ficarão disponíveis por<strong> 72 horas</strong>, para que você possa assistir no seu tempo.

Inscreva-se para a Semana do Dentista Prescritor



Ah, um <strong> aviso importante: não serão emitidos certificados de participação do evento.
         </strong>  </p>
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/1qgzL61tz_-7OElyBjYIfeNPq1bY10IGT0bv8A1SpxZ0/viewform?edit_requested=true">
        <Button text={"Inscreva-se Gratuitamente"}></Button></a>
      </section>


      
    </main>
  );
}
