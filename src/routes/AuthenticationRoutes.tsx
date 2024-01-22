import BlankLayout from "../layouts/Blank";
import LoginPage from "../pages/Auth/Login";
import SignUpPage from "../pages/Auth/Signup";

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <BlankLayout />,
  children: [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ],
};

export default AuthenticationRoutes;
