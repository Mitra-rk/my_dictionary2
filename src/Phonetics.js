import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.data.audio) {
    return (
      <div className="Phonetics">
        
        <h5>{props.data.text}</h5>
        
        <a href={props.data.audio}>listen</a>
      </div>
    );
  } else {
    return null;
  }
}
