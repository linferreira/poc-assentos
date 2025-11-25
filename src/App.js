import Deck from "./Deck";
import "./App.css";
import seatMap from "./seatMap.json";

function App() {
  return (
    <div className="App">
      {seatMap.data[0].decks.map((deck, i) => (
        <Deck deck={deck} key={i} />
      ))}
    </div>
  );
}

export default App;
