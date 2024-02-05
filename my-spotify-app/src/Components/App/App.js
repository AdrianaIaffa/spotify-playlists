import styles from "./App.module.css";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div>
      <h1>My Spotify Playlists</h1>
    <div className="App">
     <SearchBar />
    </div>
    <div className="App-playlist">
      <SearchResults />
      <Playlist />
       
    </div>
    </div>
  );
}

export default App;
