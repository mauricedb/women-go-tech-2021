export function Movie({ movie }) {
  return (
    <form>
      <div>
        <label>Title</label>
        <p>{movie.title} </p>
      </div>

      <div>
        <label>Overview</label>
        <p>{movie.overview} </p>
      </div>

      <div>
        <label>Vote average</label>
        <p>{movie.vote_average} </p>
      </div>

      <div>
        <label>Release date</label>
        <p>{movie.release_date} </p>
      </div>
    </form>
  );
}
