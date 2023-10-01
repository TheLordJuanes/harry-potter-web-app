import React, {useEffect, useState} from 'react';
import MovieCard from "../components/MovieCard.jsx";
import axios from "../config/axios.js";

export default function Movies() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        await axios.get("/movies")
            .then((response) => setMovies(response.data.data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {getMovies()},[]);

    const renderMovies = () => {
        return movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {renderMovies()}
            </div>
        </>
    );
}
