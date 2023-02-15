// React
import { useRef } from "react";

// Icons
import {
  SiInstagram,
  SiTiktok,
  SiDiscord,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

var OpenSea = require("../../../assets/icons/opensea_white.png");

var EngSite = require("../../../assets/icons/bandeira.jpg");

export function Footer() {
  const header = useRef(null);
  const propose = useRef(null);
  const videos = useRef(null);
  const whatWeDo = useRef(null);
  const categories = useRef(null);
  const history = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="socials">
          <a
            href="https://www.instagram.com/farmacodontologia/"
            className="boxSocials"
          >
            <SiInstagram />
          </a>

          <a
            href="https://www.youtube.com/channel/UCYdKtFDfeBYQqEbr3GDfJAw"
            className="boxSocials"
          >
            <SiYoutube />
          </a>
         
        </div>
      </div>
    
      
      <div className="container">
        <div className="line"></div>
      </div>
      <h3 className="copyright">contato@farmacodontologia.com</h3>
    </footer>
  );
}
