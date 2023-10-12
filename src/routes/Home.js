import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
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
                <Movie coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
            ))}
            </div>
        )}
        </div>
    );
}
export default Home;