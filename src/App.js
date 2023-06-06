import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1>What word do you want to look up?</h1>
        <Dictionary defaultWord="sunset" />
      </main>
      <footer>
        Coded by Mitra Enayatollahi and it is{" "}
        <a href="https://github.com/Mitra-rk/my_dictionary2">
          Open-sourced on GitHUb
        </a>
      </footer>
    </div>
  );
}
