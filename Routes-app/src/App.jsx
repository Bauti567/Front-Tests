import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import Barra from "./components/Barra";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <BrowserRouter>
      <Barra/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/user/:id" element={<UserPage/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
