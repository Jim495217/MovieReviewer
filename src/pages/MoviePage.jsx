import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MoviePage() {
  const { id } = useParams(); // get movie id from URL
  const [movie, setMovie] = useState(null);

  const API_KEY = "YOUR_API_KEY";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  if (!movie) {
    return <h2>Loading movie...</h2>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>

      <img src={movie.Poster} alt={movie.Title} />

      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
}

export default MoviePage;