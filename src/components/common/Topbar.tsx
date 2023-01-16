import { AppBar } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`
      }}
    >

    </AppBar>
  )
}

export default Topbar;