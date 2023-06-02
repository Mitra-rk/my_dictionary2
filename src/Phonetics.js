import React from "react";

export default function Phonetics(props) {
  console.log(props.data);
  if (props.data.audio) {
    return (
      <div className="Phonetics">
        <strong>Phonetics</strong>
        <h3>{props.data.phonetic}</h3>
        <a href={props.data.audio}>listen</a>
      </div>
    );
  } else {
    return null;
  }
}
