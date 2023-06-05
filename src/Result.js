import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Result.css"

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <section>
          <h3>{props.data.word}</h3>
          {props.data.phonetics.map(function (phonetic, index) {
            if (index < 2) {
              return (
                <div key={index}>
                  <Phonetics data={phonetic} />
                </div>
              );
            } else {
              return false;
            }
          })}
        </section>
        <section>
          {props.data.meanings.map(function (meaning, index) {
            
            if (index < 2) {
              return (
                <div key={index}>
                  <Meanings data={meaning} />
                </div>
              );
            } else {
              return false;
            }
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
