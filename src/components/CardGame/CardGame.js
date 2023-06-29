import React, { memo } from "react";
import { getValidUrlImg } from "helpers/functions";
import "./CardGame.css";

function CardGame({ item = {}, onClick = () => {} }) {
  return (
    <div className="home-container-card">
      <div className="home-holder-img">
        <img
          src={getValidUrlImg(item.key)}
          alt="key"
          className="home-img"
          onClick={() => onClick(item)}
        />
      </div>
      <div className="home-holder-title">{item.title}</div>
    </div>
  );
}

export default memo(CardGame);
