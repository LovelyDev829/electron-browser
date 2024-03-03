import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../layout.css";
// import { useNavigate } from "react-router-dom";

const SecondBar = () => {
  // const navigator = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 10px 0px 10px",
          borderBottom: "1px solid gray",
        }}
      >
        <div className="containerStyle" style={{ width: "29.5%",minWidth:"280px" }}>
          <button
            className="sectionStyle"
            // onClick={() => navigator("/sitemap")}
          >
            <div className="itemStyle">
              <AccountTreeOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Site map</p>
          </button>
          <button
            className="sectionStyle"
            // onClick={() => navigator("/download")}
          >
            <div className="itemStyle">
              <GetAppOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Téléchargements</p>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <div className="tab_google">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: "5px",
              }}
            >
              <div
                style={{
                  width: "15%",
                  textAlign: "center",
                  paddingTop:"10px"
                }}
              >
                <img
                  alt="google_icon"
                  width="40%"
                  style={{ margin: "0px", minWidth: "30px" }}
                  src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png?f=webp&w=128"
                />
              </div>
              <div
                style={{
                  width: "80%",
                  overflowX: "scroll",
                  scrollbarWidth: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <p style={{ fontSize: "15px", lineHeight: "0px" }}>
                  <strong>Nom de domaine |</strong>  <span style={{fontSize:"14px",fontWeight:"500"}}>Titre de la page</span>
                </p>

                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  <a
                    href="https://fr.freepik.com/photos-populaire#from_element=home_verticals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://fr.freepik.com/photos-populaire#from_element=home_verticals
                  </a>
                </p>

                <p style={{ fontSize: "12px", lineHeight: "0px" }}>
                  Le lorem ipsum est, en imprimerie, une suite de mots sans
                  signification utilisée
                </p>
              </div>
            </div>
          </div>

          <div className="containerStyle">
            <button
              className="sectionStyle"
              // onClick={() => navigator("/")}
            >
              <div className="itemStyle">
                <SearchOutlinedIcon className="iconStyle" />
              </div>
              <p className="titleStyle">Recherches</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondBar;
