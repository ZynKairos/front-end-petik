import React from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";

const Movies = () => {
    const datas = [
        {            
            title: "judul film 1", 
            year: 2012,
            genre: "Comedy",
            poster: "https://picsum.photos/200/300",
        },
        {            
            title: "judul film 2", 
            year: 2043,
            genre: "Horror",
            poster: "https://picsum.photos/200/300",
        },
        {            
            title: "judul film 3", 
            year: 2022,
            genre: "Romance",
            poster: "https://picsum.photos/200/300",
        },
        {            
            title: "judul film 4", 
            year: 2023,
            genre: "Horror",
            poster: "https://picsum.photos/200/300",
        },
        {            
            title: "judul film 5", 
            year: 2013,
            genre: "Horror",
            poster: "https://picsum.photos/200/300",
        },
        {            
            title: "judul film 6", 
            year: 2054,
            genre: "Horror",
            poster: "https://picsum.photos/200/300",
        },
        {            
            title: "judul film 7", 
            year: 2042,
            genre: "Horror",
            poster: "https://picsum.photos/200/300",
        },        
    ]
    return (
        <div>
            <h2>Lates Movies</h2>
            <div class="movies-container">
                {datas.map((data, index) => {
                        return (
                            <Movie 
                                title={data.title} 
                                year={data.year} 
                                genre={data.genre} 
                                poster={data.poster}
                            />
                        );
                    })}                
            </div>
        </div>
    );
};

export default Movies;