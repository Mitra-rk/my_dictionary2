import React from "react";

export default function Meanings(props) {
  console.log(props.data);
  return (
    <div className="Meanings">
      {props.data.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <strong>part of spee:ch</strong>
              <h3>{props.data.partOfSpeech}</h3>
              <br />
              <h2>Definition:</h2>
              <p>{definition.definition}</p>
            </div>
          );
        }
      })}
      <h2>Synonyms:</h2>
      {props.data.synonyms.map(function (synonym, index) {
        if (index < 2) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        }
      })}
    </div>
  );
}
