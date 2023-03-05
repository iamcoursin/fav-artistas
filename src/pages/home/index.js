import React from "react";
import "../../styles/home.scss";
import { Mood } from "../../components/mood";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="titulo">Qual o seu mood hoje?</h1>
     
          <Mood name={'r&b'} />
          <Mood name={'trap'} />
          <Mood name={'hip hop'} />
          <Mood name={'indie'} />
          <Mood name={'não quero responder'} />
    
    </div>
  );
};
