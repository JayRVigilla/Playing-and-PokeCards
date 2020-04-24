import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import useFlip from "./hooks.js";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  const [isFacingUp, flip] = useFlip()
  
  function cardFlip(){
    flip(isFacingUp);
    
  }

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={cardFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
