import React from "react";
import Define from "./Define";
export default function Meanings(props) {
  console.log(props.data);
  return (
    <div className="Meanings">
      {props.data.definitions.map(function (def, index) {
        console.log(def);
        return (
          <div key={index}>  
            <p>{def.definition}</p>
            
          </div>
        );
      })}
    </div>
  );
}
