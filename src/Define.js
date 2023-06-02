import React from "react";

export default function Define(props) {
  {
    props.data.map(function (syn, index) {
      console.log(syn);
      return (
        <ul key={index}>
          <li>{syn.synonyms}</li>
        </ul>
      );
    });
  }
}
