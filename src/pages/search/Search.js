import Partners from "../../components/partner/Partners";
import "./search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import partnerIcon from "../../assets/image/partners.png";
import logoTitile from "../../assets/image/newspaper-folded.png";
import faq from "../../assets/image/faq.png";
import windowIcon from "../../assets/image/window.png";
import paletteIcon from "../../assets/image/palette.png";
import favoriteFolder from "../../assets/image/favorite-folder.png";
import urlIoon from "../../assets/image/URL.svg";
import webIcon from "../../assets/image/web.png";
const Search = () => {
  const navigator = useNavigate();
  const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleNavigate = () => {
    navigator("/browser", { state: { url } });
  };

  const slides = [
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-56-512.png",
      title: "-15%",
      section: "Nom partenaire",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-56-512.png",
      title: "-50%",
      section: "Nom partenaire",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-56-512.png",
      title: "-88%",
      section: "Nom partenaire",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-56-512.png",
      title: "-19%",
      section: "Nom partenaire",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-56-512.png",
      title: "-20%",
      section: "Nom partenaire",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans,asdfasdfasdfffffffffffffffffffffffffffffffffffffffffffffffffffff",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-002/400/UI_glyph_icons_circle-56-512.png",
      title: "-12%",
      section: "Nom partenaire",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="container_do">
          <div className="group_do">
            <input
              type="text"
              value={url}
              onChange={handleInputChange}
              className="url_input"
              placeholder="Enter URL"
            />
            <button className="btn_w">
              <img src={webIcon} width="30px" alt="webIcon" />
            </button>
            <button className="btn_do" onClick={handleNavigate}>
              <img src={urlIoon} width="30px" alt="urlIoon" />
            </button>
          </div>
          <div className="group_img">
            <p className="img_p">Vivre à Paris</p>
            <img
              alt="pic_1"
              src="https://media.istockphoto.com/id/1347866896/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BE%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B8%D1%81%D1%82%D1%8C%D1%8F-%D0%BD%D0%B0-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%BC-%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B5-%D0%B2-%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0-%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82-%D0%B1%D0%BE%D0%BA%D0%B5.jpg?s=612x612&w=0&k=20&c=tgMnww67aZsSsnBOB1TbyeXZSm7ZYgALbqMeSd2xbkU="
              width="100px"
            />
            <p className="img_p">Communiqués-Numéros utiles-Bons plans</p>
          </div>
        </div>
        <div className="container_pt">
          <div>
            <p className="pt_p">Partenaires</p>
            <hr
              style={{ border: "none", borderTop: "2px solid rgba(0,0,0,0.8)" }}
            />
          </div>
          <div>
            <Partners slides={slides} />
          </div>
          <div className="footer">
            <div className="footer_set">
              <img src={partnerIcon} className="footer_ico" alt="partnerIcon" />
              <p className="footer_p">Partenaire</p>
            </div>
            <div className="footer_set">
              <div className="footer_set">
                <img src={logoTitile} className="footer_ico" alt="logoTitile" />
                <p className="footer_p">Titre du logo</p>
              </div>
              <div className="footer_set">
                <img src={faq} className="footer_ico" alt="faq" />
                <p className="footer_p">Commentaire</p>
              </div>
              <div className="footer_set">
                <img src={faq} className="footer_ico" alt="faq" />
                <p className="footer_p">Titre du logo</p>
              </div>
            </div>
            <div className="footer_set">
              <img src={faq} className="footer_ico" alt="faq" />
              <p className="footer_p">Titre du logo</p>
            </div>
            <div className="footer_set">
              <img src={windowIcon} className="footer_ico" alt="windowIcon" />
              <img src={paletteIcon} className="footer_ico" alt="paletteIcon" />
              <img
                src={favoriteFolder}
                className="footer_ico"
                alt="favoriteFolder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
