import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [resource, setResource] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function find(response) {
    console.log(response.data[0]);
    setResource(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    axios.get(apiUrl).then(find);
  }
  function handleWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input onChange={handleWord} type="search"></input>
      </form>
    </div>
  );
}
