import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
    {/* el Link es como el a (ancord tag, pero en lugar de recibir un href recibe un to=) */}
      <h1>UseContext</h1>
        <NavBar />
      <hr />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Esto es para que si el usuario pone una URL que no esta controlada, lo lleve directo al homePage */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
