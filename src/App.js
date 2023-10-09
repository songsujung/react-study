import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // then() 대신에 async, await을 사용
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    //const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies()
  }, []);
  console.log(movies);
  return (
  // map함수를 사용할 때 태그에 고유한 키값을 넣어주어야한다.  
    <div>
      {loading ? (<h1>loading...</h1>
      ) : (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
        )}
    </div>
  );
}
export default App;
