import logo from "./logo.svg";
import "./App.css";

import { Movie } from "./components/Movie";

const movie19404 = {
  id: 19404,
  overview:
    "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
  release_date: "1995-10-20",
  title: "Dilwale Dulhania Le Jayenge",
  vote_average: 8.7,
};

function App() {
  return (
    <div className="App">
      <Movie movie={movie19404} />
    </div>
  );
}

export default App;
