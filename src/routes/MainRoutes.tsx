import PrivateRoute from "./PrivateRoutes";
import LoginPage from "../pages/Auth/Login";
import ChatInterface from "../pages/User/ChatInterface";
import Upload from "../pages/Admin/Upload";
import MainLayout from "../layouts/Main";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/ai",
  element: <MainLayout />,
  children: [
    {
      element: <PrivateRoute />,
      children: [
        {
          path: "test",
          element: <LoginPage />,
        },
        {
          path: "chat",
          element: <ChatInterface />,
        },
        {
          path: "upload",
          element: <Upload />,
        },
      ],
    },
  ],
};

export default MainRoutes;