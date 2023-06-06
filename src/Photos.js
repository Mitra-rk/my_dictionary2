import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    console.log(props.data[0].src.landscape);
    return (
      <section className="Photos container">
        <div className="row">
          {props.data.map(function (data, index) {
            return (
              <div className="col-4" key={index}>
                <img className="img-fluid"
                  alt={data.alt}
                  src={data.src.landscape}
                ></img>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
