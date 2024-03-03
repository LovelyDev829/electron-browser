import { useLocation } from "react-router-dom";
import "./Browser.css";
import BrowserHeader from "../../components/browserHeader/BrowserHeader";

const Browser = () => {
  const location = useLocation();
  const websiteUrl = location.state.url;
  console.log("website=>", websiteUrl);
  return (
    <>
      <div className="container_url">
        <div className="container_SM">This is site map & download part</div>
        <div className="container_bow">
          <BrowserHeader />
          <div style={{backgroundImage:"url('https://media.istockphoto.com/id/841135250/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD-%D1%81%D0%BA%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=6ESw9w4u8ZKdSXXKLl-FNGbIfdswFcZz7G1mHGMGgiY=')", padding:"20px"}}>
            <iframe
              src={websiteUrl}
              title="URL Content"
              width="100%"
              height="800px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browser;
