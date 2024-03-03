import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "../layout.css";
import { useNavigate } from "react-router-dom";
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
              <AccountTreeOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Site map</p>
          </button>
          <button
            className="sectionStyle"
            onClick={() => navigator("/download")}
          >
            <div className="itemStyle">
              <GetAppOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Téléchargements</p>
          </button>
        </div>

        <div className="containerStyle">
          <button className="sectionStyle" onClick={() => navigator("/")}>
            <div className="itemStyle">
              <SearchOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Recherches</p>
          </button>
          <button
            className="sectionStyle"
            onClick={() => navigator("/history")}
          >
            <div className="itemStyle">
              <RestorePageOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Historique</p>
          </button>
          <button
            className="sectionStyle"
            onClick={() => navigator("/favorites")}
          >
            <div className="itemStyle">
              <StarBorderOutlinedIcon className="iconStyle" />
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
              <GridViewOutlinedIcon className="iconStyle" />
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
              <SettingsOutlinedIcon className="iconStyle" />
            </div>
            <p className="titleStyle">Paramétrages</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstBar;
