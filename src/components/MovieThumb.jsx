export default function MovieThumb({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/240x135?text=No+Poster';

  return (
    <p>
      <img
        src={poster}
        alt={movie.Title}
        className="d-block position-relative"
        style={{ objectFit: 'cover', width: "160px" }}
      />
      <span className="badge-new">{movie.Year}</span>
    </p>
  );
}
