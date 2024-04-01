// import User from "../User/User.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import Counter from "../Counter/Counter.js";
import Car from "../Car/Car.js";
import Movies from "../Movies/Movies.js";
import User from "../User/User.js";
import Hero from "../Hero/Hero.js";
import "./Main.css";

const Main = () => {
    const datas = [
        {
            nama : "Budi",
            member : "Gold",
            message : "Hello World",
        },
        {
            nama : "Bambang Pacul",
            member : "Master",
            message : "I Love Coding",
        },
        {
            nama : "Azizah",
            member : "Platinum",
            message : "Terlalu Cepat caranya",
        },
        {
            nama : "Humairah",
            member : "Non Member",
            message : "Saya Tertipu",
        },
        {
            nama : "Raihan",
            member : "Diamond",
            message : "Capek",
        },
        {
            nama : "Wafiqa",
            member : "Platinum",
            message : "Ngapain Nget",
        },        
    ]
    return (
        <div class="content">
            <Hero />
            {/* <Car 
                gambar="https://assets-skorid.s3.ap-southeast-1.amazonaws.com/Ferrari_FXX_K_EVO_Dok_Ferrari_19ea2405c8.jpg" 
                merk="Ferrari" 
                harga="200.000.000" 
                isNew="true" 
            />

            <Car 
                gambar="https://images.app.goo.gl/VN5CWkY2GnhUgTLdA" 
                merk="Mobil Terbang" 
                harga="4,5 miliyar" 
                isNew="true" 
            /> */}
            {/* <Car /> */}
            <Movies />
            {datas.map((data) => ( 
                <User 
                    nama={data.nama} 
                    member={data.member} 
                    message={() => alert(data.message)}
                />
            ))}
        </div>
    );
};

export default Main;