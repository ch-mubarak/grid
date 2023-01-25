import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [api, setApi] = useState(1);
  console.log(api);
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(api);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Choose An API</h1>
      <select onChange={handleChange}>
        <option value={1}>hello</option>
        <option value={2}>nice</option>
        <option value={3}>good</option>
      </select>
      <button>submit</button>
    </form>
  );
};

export default Form;
