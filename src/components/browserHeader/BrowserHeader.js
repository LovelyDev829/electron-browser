import React from "react";
import { useNavigate } from "react-router-dom";
import "./BrowserHeader.css";
import Accueil from "../../assets/image/Accueil.svg";
import Contact from "../../assets/image/Contact.svg";
import Connexion from "../../assets/image/Compte.svg";
import Pannier from "../../assets/image/Pannier.svg";
import Favoris from "../../assets/image/Favoris.svg";
import { Search } from "@mui/icons-material";
import Annotations from "../../assets/image/Attache.svg";
import Retoure from "../../assets/image/Retoure.svg";
const HeaderSection = ({ src, text, onClick }) => (
  <button className="header_section" onClick={onClick}>
    <img alt={text} src={src} width="32px"/>
    <p className="header_p">{text}</p>
  </button>
);

const BrowserHeader = () => {
  const navigate = useNavigate();

  return (
    <nav className="header_container">
      <HeaderSection src={Accueil} text="Accueil" />
      <HeaderSection src={Contact} text="Contact" />
      <HeaderSection src={Connexion} text="Connexion" />
      <HeaderSection src={Pannier} text="Pannier" />
      <div className="header_input">
        <input className="input_url" placeholder="Recherche sur la page" />
        <button style={{ backgroundColor: "#e8e8e8", borderRadius: "13px" }}>
          <Search style={{ fontSize: "18px" }} />
        </button>
      </div>
      <HeaderSection src={Favoris} text="Favoris" />
      <HeaderSection src={Annotations} text="Annotations" />
      <HeaderSection
        src={Retoure}
        text="Retoure"
        onClick={() => navigate("/")}
      />
    </nav>
  );
};

export default BrowserHeader;
