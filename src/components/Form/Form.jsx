import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [api, setApi] = useState("users");

  const handleChange = (e) => {
    setApi(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(api);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Choose An API</h1>
      <select onChange={handleChange}>
        <option value={"todos"}>Todos</option>
        <option value={"posts"}>Posts</option>
        <option value={"users"}>Users</option>
      </select>
      <button>submit</button>
    </form>
  );
};

export default Form;
