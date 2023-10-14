import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Link를 사용하면 페이지 전체를 새로고침하지 않고 페이지 이동이 이뤄짐(빠르게 반응하는 것처럼 보여짐)
function Movie({id, coverImg, title, summary, genres}) {
    return <div>
    <img src={coverImg} />
    <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;