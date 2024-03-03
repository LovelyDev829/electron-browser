import { Box } from "@mui/material";
import SecondBar from "./SecondBar";

const Layout = ({children}) => {
  return (
    <Box>
      <SecondBar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
