import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Movies } from "./components/Movies";
import { Movie } from "./components/Movie";

function App() {
  const [currentMovie, setCurrentMovie] = useState(null);

  return (
    <div className="container">
      {currentMovie ? (
        <Movie
          movie={currentMovie}
          clearCurrentMovie={() => setCurrentMovie(null)}
        />
      ) : (
        <Movies setCurrentMovie={setCurrentMovie} />
      )}
    </div>
  );
}

export default App;
