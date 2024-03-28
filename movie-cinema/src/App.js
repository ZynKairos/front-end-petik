import Footer from "./component/Footer/Footer.js";
import Navbar from "./component/Navbar/Navbar.js";
import Main from "./component/Main/Main.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
// import Movie from "./component/Movie/Movie.js";
// import Movies from "./component/Movies/Movies.js"
import User from "./component/User/User.js";
import Car from "./component/Car/Car.js";
import gambar from "./component/man.png";

function App() {
  const addMovie = () => {

  }
  // const name ="Kairos";
  // const name1 ="Raihan";
  // const name2 ="Wafiqa";
  // const name3 ="Samsul";
  // const name4 ="Zyn";
  // const nama5 ="Bambang Pacul";
  // const nama6 ="Budi";
  // const nama7 ="Ucup";

  return (
    <div className="container">
      <Navbar />
 
      <Main />
      <Footer nama="Zyn Kairos"/>
    </div>
  );
};


export default App;
