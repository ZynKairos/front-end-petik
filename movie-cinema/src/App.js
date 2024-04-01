import Footer from "./component/Footer/Footer.js";
import Navbar from "./component/Navbar/Navbar.js";
import Main from "./component/Main/Main.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
// import Movie from "./component/Movie/Movie.js";
// import Movies from "./component/Movies/Movies.js"
import User from "./component/User/User.js";
import Car from "./component/Car/Car.js";
import gambar from "./component/man.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/detail.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/popular" element={ <Popular />} />
          <Route path="/top" element={ <TopRated />} />
          <Route path="/detail/:id" element={ <Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};


export default App;
