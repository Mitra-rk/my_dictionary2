import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.data.audio) {
    return (
      <div className="Phonetics">
        <a href={props.data.audio}>listen</a>

        <h5>{props.data.text}</h5>
      </div>
    );
  } else {
    return null;
  }
}
