import React from "react";
import "./Movie.css"

const Movie = (props) => {
    const { title, year, genre, poster } = props;
    return (
        <div className="movie">
            <img src={poster} alt="title" />
            <h3 class="title">{title}</h3>
            <p className="year">{year}</p>
            <p className="genre">{genre}</p>
        </div>
    );
};

export default Movie;