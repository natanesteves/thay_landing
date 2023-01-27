// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";

import { Doubts } from "../components/Doubts";

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
            <h1>O DENTISTA E A FARMACOLOGIA</h1>
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
          <h1>O EVENTO!!!</h1>
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
              Serão 3 dias de uma imersão no mundo da farmacologia aplicada a clínica odontológica. Vamos falar sobre a importância do conhecimento em farmacologia para uma prática clínica segura. As aulas são voltadas para toda a comunidade Odontológica: alunos de graduação, pós-graduação e clínicos!
              </p>
            </div>
            <div className="boxInformation two">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Disponivel tambem no youtube</h1>
              <p>
              As aulas serão disponibilizadas no Youtube no canal @farmacodontologia (pode ser legal por um hiperlink), sempre às 20:23.
              </p>
            </div>
            <div className="boxInformation three">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Confira nossos temas e datas:</h1>
              <p>
              27/02 – Segunda-feira – Os três pilares da prescrição na Odontologia

28/02 – Terça-feira – A farmácia do dentista

01/03 – Quarta-feira – Pacientes e seus medicamentos: o desafio do dentista do século XXI
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <section className="propose" id="propose">
        <div className="container">
          <div className="imgPropose"></div>
          <div className="descriptionPropose">
            <h1>QUEM SOU EU:</h1>
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
            <h1>INVESTIMENTO</h1>
            <p>
            O evento será totalmente gratuito! As aulas ficarão disponíveis por 72 horas, para que você possa assistir no seu tempo.

Inscreva-se para a Semana do Dentista Prescritor



Ah, um aviso importante: não serão emitidos certificados de participação do evento.
           </p>
          </div>
        </div>
      </section>

      
    </main>
  );
}
