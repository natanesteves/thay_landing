// Icons
import {
  SiInstagram,
  SiTiktok,
  SiDiscord,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";

// React
import { useState, useRef } from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

// Icon
import { FiMenu, FiX } from "react-icons/fi";

var OpenSea = require("../../../assets/icons/opensea.png");
var EngSite = require("../../../assets/icons/bandeira.jpg");

export function Header() {
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

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function handleMenuIsOpen() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  }

  return (
    <header id="header">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus optio explicabo enim placeat. Sed illum praesentium recusandae nulla rerum voluptatum, odit libero sapiente officia adipisci consequuntur eos est beatae!
    </header>
  );
}
