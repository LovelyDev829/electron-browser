import React from "react";
import { useNavigate } from "react-router-dom";
import { CottageSharp, ContactPhoneSharp, PermContactCalendarSharp, OutdoorGrillSharp, TrySharp, ColorizeSharp, AssignmentReturnSharp, Search } from "@mui/icons-material";
import "./BrowserHeader.css";

const HeaderSection = ({ Icon, text, onClick }) => (
  <button className="header_section" onClick={onClick}>
    <Icon style={{ color: "rgba(0, 0, 0, 0.6)" }} />
    <p className="header_p">{text}</p>
  </button>
);

const BrowserHeader = () => {
  const navigate = useNavigate();

  return (
    <nav className="header_container">
      <HeaderSection Icon={CottageSharp} text="Accueil" />
      <HeaderSection Icon={ContactPhoneSharp} text="Contact" />
      <HeaderSection Icon={PermContactCalendarSharp} text="Connexion" />
      <HeaderSection Icon={OutdoorGrillSharp} text="Pannier" />
      <div className="header_input">
        <input className="input_url" placeholder="Recherche sur la page" />
        <button style={{ backgroundColor: "#e8e8e8", borderRadius: "13px" }}>
          <Search style={{ fontSize: "18px" }} />
        </button>
      </div>
      <HeaderSection Icon={TrySharp} text="Favoris" />
      <HeaderSection Icon={ColorizeSharp} text="Annotations" />
      <HeaderSection Icon={AssignmentReturnSharp} text="Retour" onClick={() => navigate("/")} />
    </nav>
  );
};

export default BrowserHeader;