import React, { useState } from "react";

// Material-ui
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Project imports
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// style + assets
import LeftIcon from "../../assets/images/left.svg";
import RightIcon from "../../assets/images/right.svg";

const drawerWidth = 400;

const Root = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop !== "isDetailedView" && prop !== "projectName",
})<{
  open?: boolean;
  isDetailedView?: boolean;
  projectName?: boolean;
}>(({ theme, open, isDetailedView, projectName }) => ({
  flexGrow: 1,
  padding: theme.spacing(0.6),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: isDetailedView ? `-${drawerWidth}px` : "0px",
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  marginTop: projectName ? "6rem" : "10rem",
}));

// ============================|| MAIN COMPONENT ||============================ //

const Main: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isDetailedView = pathname.includes("manage");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      sx={{
        background: "#F5F5F5",
        height: "100%",
        display: "flex",
      }}
    >
      <Header />
      {isDetailedView && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <Root
        open={toggleSidebar}
        isDetailedView={isDetailedView}
        projectName={
          location?.pathname === "/projects/list" || location?.pathname === "/"
        }
      >
        <div>
          <Outlet />
        </div>
      </Root>
    </Box>
  );
};

export default Main;
