import { useEffect, useState } from "react";

export function Movies({ setCurrentMovie }) {
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

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentMovie(movie);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
