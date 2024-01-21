// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from './pages/HomePage';
import LoginPage from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} exact /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
