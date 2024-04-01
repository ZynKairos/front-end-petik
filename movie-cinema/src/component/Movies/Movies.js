import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import { getMovieList } from "../../Api.js";

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
    // const [nama, setNama] = useState("Ucup");

    // console.log(nama);

    const [datas, setDatas] = useState([]);

    const handleClick = () => {
        const movie = {
            title: "Amazing Spiderman",
            year: 2012,
            genre: "Trailer",
            poster: "https://picsum.photos/200/300",
        };
        // setDatas([...datas, movie]);
        // setNama("Budi")
    };

    const addMovie = (movie) => {
        setDatas([...datas, movie]);
    };

    useEffect(() => {
        // menangkap data result api
        getMovieList().then((result) => {
            setDatas(result);
        });
    }, []);

    console.log(datas);

    return (
        <div>
            <h2>Lates Movies</h2>
            <div class="movies-container">
                {datas.map((data, index) => {
                        return (
                            <Movie 
                                id={data.id}
                                title={data.title} 
                                year={data.release_date} 
                                poster={data.poster_path}
                            />
                        );
                    })}  

                    {/* <p>{nama}</p> */}
                    {/* <button onClick={handleClick}>Add Movie</button>               */}
            </div>
            <AddMovieForm onAddMovie={addMovie}/>

        </div>
    );
};

export default Movies;