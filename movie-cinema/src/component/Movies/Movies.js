import React, { useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";

// ========================= Tentang Pertambahan & Pengurangan ================ //
// const Counter = () => {                                                      //
//     const [number, setNumber] = useState(0);                                   //
//                                                                              //
//     const increment = () => {                                                //
//       setNumber(number + 1);                                                   //
//     };                                                                       //
//                                                                              //
//     const decrement = () => {                                                //
//       if (number > 0) {                                                       //
//         setNumber(number - 1);                                                 //
//       }                                                                      //
//     };                                                                       //
//                                                                              //
//     return (                                                                 //
//       <div className="counter">                                              //
//         <h1 className="counter__value">{number}</h1>                          //
//         <button className="counter__button" onClick={increment}>             //
//           Tambah                                                             //
//         </button>                                                            //
//         <button className="counter__button" onClick={decrement}>             //
//           Kurang                                                             //
//         </button>                                                            //
//       </div>                                                                 //
//     );                                                                       //
//   };                                                                         //
//                                                                              //
//   export default Counter;                                                    //
// ====================================== Atau ================================ //
//                                                                              //
// ====================================== Selesai ============================= //



const Movies = () => {
    const [nama, setNama] = useState("Ucup");

    console.log(nama);

    const [datas, setDatas] = useState([
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
    ]);

    // const datas = [
    //     {            
    //         title: "judul film 1", 
    //         year: 2012,
    //         genre: "Comedy",
    //         poster: "https://picsum.photos/200/300",
    //     },
    //     {            
    //         title: "judul film 2", 
    //         year: 2043,
    //         genre: "Horror",
    //         poster: "https://picsum.photos/200/300",
    //     },
    //     {            
    //         title: "judul film 3", 
    //         year: 2022,
    //         genre: "Romance",
    //         poster: "https://picsum.photos/200/300",
    //     },
    //     {            
    //         title: "judul film 4", 
    //         year: 2023,
    //         genre: "Horror",
    //         poster: "https://picsum.photos/200/300",
    //     },
    //     {            
    //         title: "judul film 5", 
    //         year: 2013,
    //         genre: "Horror",
    //         poster: "https://picsum.photos/200/300",
    //     },
    //     {            
    //         title: "judul film 6", 
    //         year: 2054,
    //         genre: "Horror",
    //         poster: "https://picsum.photos/200/300",
    //     },
    //     {            
    //         title: "judul film 7", 
    //         year: 2042,
    //         genre: "Horror",
    //         poster: "https://picsum.photos/200/300",
    //     },        
    // ];

    const handleClick = () => {
        const movie = {
            title: "Amazing Spiderman",
            year: 2012,
            genre: "Trailer",
            poster: "https://picsum.photos/200/300",
        };
        // setDatas([...datas, movie]);
        setNama("Budi")
    };

    const addMovie = (movie) => {
        setDatas([...datas, movie]);
    };

    console.log(datas);

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
                    <AddMovieForm onAddMovie={addMovie}/>

                    {/* <p>{nama}</p> */}
                    {/* <button onClick={handleClick}>Add Movie</button>               */}
            </div>
        </div>
    );
};

export default Movies;