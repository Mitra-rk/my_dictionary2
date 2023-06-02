import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <div className="Result">
        <h3>{props.data.word}</h3>
       
        {props.data.meanings.map(function (meaning, index) {
           
          return (
            <div key={index}>
              <Meanings data={meaning} />
            </div>
          );
        })}
        {props.data.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics data={phonetic} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
