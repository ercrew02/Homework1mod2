import "./App.css";
import data from "./data";
export default function App() {
  return (
    <div className="App">
      <img src={data.album.images[2].url} />
      <h1>{data.name}</h1>
      <h2>Penyanyi: {data.artists[0].name}</h2>
      <br />
      <br />
      <button type="button">Select</button>
    </div>
  );
}
