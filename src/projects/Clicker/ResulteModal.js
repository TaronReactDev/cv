import React from "react";
import "./clickerStyle.scss"

export default function ResulteModal(props) {
  return (
    <div className="resultDiv">
     <span>your result is {props.clickeCaunt}</span>
      <button className="buttonToClick" onClick={props.startNewSet}>start new set</button>
    </div>
  );
}
