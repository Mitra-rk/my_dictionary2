import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [photos, setPhotos] = useState(null);
  let [resource, setResource] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let imageApiKey = "0t0f733f3454c9aobbda64f6025e69d0";

  function findImage(response) {
    
    setPhotos(response.data.photos);
    console.log(response.data.photos);
    
  }
  function find(response) {
    setResource(response.data[0]);
  }

  function load() {
    setLoaded(true);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(find);
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(findImage);
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
            <input
              onChange={handleWord}
              type="search"
              placeholder="Write a word..."
            ></input>
          </form>
          <div className="hint">Suggested word: Sunset,Rhino,darling,...</div>
        </section>
        <Result data={resource} />
        <Photos data={photos} />
      </div>
    );
  } else {
    load();
    search();
  }
}
