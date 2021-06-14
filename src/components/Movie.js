import { useState } from "react";

export function Movie({ movie }) {
  const [thisMovie, setThisMovie] = useState(movie);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(thisMovie, null, 2));
      }}
    >
      <div>
        <label>Title</label>
        <input
          value={thisMovie.title}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, title: e.target.value })
          }
        />
      </div>

      <div>
        <label>Overview</label>
        <textarea
          value={thisMovie.overview}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, overview: e.target.value })
          }
          rows={5}
        />
      </div>

      <div>
        <label>Vote average</label>
        <input
          value={thisMovie.vote_average}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, vote_average: e.target.value })
          }
        />
      </div>

      <div>
        <label>Release date</label>
        <input
          value={thisMovie.release_date}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, release_date: e.target.value })
          }
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
