import React from "react";
import "./simpleForm.css";
import { useState, useEffect } from "react";
import Messaje from "./Messaje";

const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "Ivo",
    email: "ivan.piccardo@hotmail.com",
  });

  const { username, email } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("cambio el form");
  }, [form]);

  console.log(form);

  return (
    <>
      <h1> Formulario Simple </h1>
      <hr />
      <form className="formDiv" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="ivan.piccardo@hotmail.com"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </form>
      {username === "Ivo" && <Messaje />}
    </>
  );
};

export default SimpleForm;
