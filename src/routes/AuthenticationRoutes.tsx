import BlankLayout from "../layouts/Blank";
import LoginPage from "../pages/Auth/Login";

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <BlankLayout />,
  children: [
    {
      path: "/", 
      element: <LoginPage />,
    },
  ],
};

export default AuthenticationRoutes;
