import React from "react";
import Form from "../../components/Form/Form";
import "./Home.css";

const Home = ({onSubmit}) => {
  return (
    <div className="home">
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Home;
