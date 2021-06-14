import { useEffect, useState } from "react";

export function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await fetch(
        "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies"
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data);
      }
    }

    loadMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}
