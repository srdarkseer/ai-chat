import PrivateRoute from "./PrivateRoutes";
import ChatInterface from "../pages/User/ChatInterface";
import Upload from "../pages/Admin/Upload";
import MainLayout from "../layouts/Main";
import Setting from "../pages/Settings";
import Users from "@/pages/Admin/Users";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/ai",
  element: <MainLayout />,
  children: [
    {
      element: <PrivateRoute />,
      children: [
        {
          path: "chat",
          element: <ChatInterface />,
        },
        {
          path: "upload",
          element: <Upload />,
        },
        {
          path: "settings",
          element: <Setting />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ],
};

export default MainRoutes;
