import React from "react";
import "./Movie.css"
import { NavLink } from "react-router-dom";

const Movie = (props) => {
    const { title, year, genre, poster, id } = props;
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" />
            <h3 class="title">
                <NavLink to={`/movie/${id}`}>{title}</NavLink>
            </h3>
            <p className="year">{year}</p>
            <p className="genre">{genre}</p>
        </div>
    );
};

export default Movie;