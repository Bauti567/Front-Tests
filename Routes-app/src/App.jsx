import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import Barra from "./components/Barra";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Barra />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Navigate to="/about" />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="welcome" element={<p>Welcome</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
