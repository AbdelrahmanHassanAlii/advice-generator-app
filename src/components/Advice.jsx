import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Style.css";
import dice from "../images/icon-dice.svg";
import divider from "../images/pattern-divider-mobile.svg";
export const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  const fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(response.data.slip.advice);
    setId(response.data.slip.id);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">ADVICE #{id}</h1>
      <p className="advice">{advice}</p>
      <button className="btn" onClick={fetchAdvice}>
        <img src={dice} alt="dice" />
      </button>
      <img className="divider" src={divider} alt="dice" />
    </div>
  );
};
