import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/FirstLayout/PublicLayout";
import Download from "../pages/Download";
import Search from "../pages/search/Search";
import SiteMap from "../pages/SiteMap";
import History from "../pages/History";
import Favorites from "../pages/Favorites";
import Applications from "../pages/Applications";
import Settings from "../pages/Settings";
import Browser from "../pages/browser/BrowserGgl";
import Layout from "../layout/SecondLayout/Layout";

export const routes = createBrowserRouter([
  {
    path: "/sitemap",
    element: <PublicLayout children={<SiteMap />} />,
  },
  {
    path: "/download",
    element: <PublicLayout children={<Download />} />,
  },
  {
    path: "/",
    element: <PublicLayout children={<Search />} />,
  },
  {
    path: "/history",
    element: <PublicLayout children={<History />} />,
  },
  {
    path: "/Favorites",
    element: <PublicLayout children={<Favorites />} />,
  },
  {
    path: "/applications",
    element: <PublicLayout children={<Applications />} />,
  },
  {
    path: "/settings",
    element: <PublicLayout children={<Settings />} />,
  },
  {
    path: "/browser",
    element: <Layout children={<Browser />} />,
  },
]);