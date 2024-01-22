// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from './pages/HomePage';
import LoginPage from "./pages/Auth/Login";
import ChatInterface from "./pages/User/ChatInterface";
import Upload from "./pages/Admin/Upload";

import Routes from "./routes";

function App() {
  return <Routes />;
}

export default App;
