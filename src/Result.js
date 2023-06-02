import React from "react";
import Meanings from "./Meanings";

export default function Result(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Result">
        <h3>{props.data.word}</h3>
        {props.data.meanings.map(function (mean, index) {
          return (
            <div key={index}>
              <strong>partOfSpeech</strong>
              <h3>{mean.partOfSpeech}</h3>

              <strong>definition</strong>
              <br />
              <Meanings data={mean} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
