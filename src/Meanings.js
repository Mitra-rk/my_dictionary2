import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.data);
  return (
    <div className="Meanings">
      {props.data.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <h4>{props.data.partOfSpeech}</h4>
              <p>{definition.definition}</p>
            </div>
          );
        } else {
          return null;
        }
      })}

      {props.data.synonyms.map(function (synonym, index) {
        if (index < 2) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
