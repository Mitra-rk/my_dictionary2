import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css"

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);

  let [resource, setResource] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function find(response) {
    console.log(response.data[0]);
    setResource(response.data[0]);
    
  }

  function load(){
    setLoaded(true);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(find);
  }

  function handleLoad(event) {
    event.preventDefault();

    search();
  }
  function handleWord(event) {
    setWord(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleLoad}>
            <input onChange={handleWord} type="search" placeholder="Write a word..."></input>
          </form>
          <div className="hint">
            Suggested word: Sunset,Rhino,darling,...
          </div>
        </section>
        <Result data={resource} />
      </div>
    );
  } else {
    load();
    search();
  }
}
