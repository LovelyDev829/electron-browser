import "../layout.css";
import { useNavigate } from "react-router-dom";
import SiteMapImage from "../../assets/image/Site maps.svg";
import Download from "../../assets/image/Telechargement.svg";
import Recherches from "../../assets/image/Recherche.svg";
import History from "../../assets/image/Historique.svg";
import Favoris from "../../assets/image/Favoris.svg";
import Application from "../../assets/image/Aplication.svg";
import parametrages from "../../assets/image/Parametrage.svg";

const FirstBar = () => {
  const navigator = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px 10px 0px 10px",
          borderBottom: "1px solid gray",
        }}
      >
        <div className="containerStyle">
          <button
            className="sectionStyle"
            onClick={() => navigator("/sitemap")}
          >
            <div className="itemStyle">
              <img
                src={SiteMapImage}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">Site map</p>
          </button>
          <button
            className="sectionStyle"
            onClick={() => navigator("/download")}
          >
            <div className="itemStyle">
              <img
                src={Download}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">Téléchargements</p>
          </button>
        </div>

        <div className="containerStyle">
          <button className="sectionStyle" onClick={() => navigator("/")}>
            <div className="itemStyle">
              <img
                src={Recherches}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">Recherches</p>
          </button>
          <button
            className="sectionStyle"
            onClick={() => navigator("/history")}
          >
            <div className="itemStyle">
              <img
                src={History}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">Historique</p>
          </button>
          <button
            className="sectionStyle"
            onClick={() => navigator("/favorites")}
          >
            <div className="itemStyle">
              <img
                src={Favoris}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">favoris</p>
          </button>
        </div>

        <div className="containerStyle">
          <button
            className="sectionStyle"
            onClick={() => navigator("/applications")}
          >
            <div className="itemStyle">
              <img
                src={Application}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">Applications</p>
          </button>
        </div>

        <div className="containerStyle">
          <button
            className="sectionStyle"
            onClick={() => navigator("/settings")}
          >
            <div className="itemStyle">
              <img
                src={parametrages}
                alt="sitemap"
                width="70%"
                className="iconStyle"
              />
            </div>
            <p className="titleStyle">Paramétrages</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstBar;
