// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from './pages/HomePage';
import LoginPage from "./pages/Auth/Login";
import ChatInterface from "./pages/User/ChatInterface";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} exact /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
