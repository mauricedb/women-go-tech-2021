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
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={thisMovie.title}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Overview</label>
        <textarea
          className="form-control"
          value={thisMovie.overview}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, overview: e.target.value })
          }
          rows={5}
        />
      </div>

      <div className="mb-3">
        <label>Vote average</label>
        <input
          className="form-control"
          value={thisMovie.vote_average}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, vote_average: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label>Release date</label>
        <input
          className="form-control"
          value={thisMovie.release_date}
          onChange={(e) =>
            setThisMovie({ ...thisMovie, release_date: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}
