import Footer from "./component/Footer/Footer.js";
import Navbar from "./component/Navbar/Navbar.js";
import Main from "./component/Main/Main.js";
import User from "./component/User/User.js";
import Car from "./component/Car/Car.js";
import gambar from "./component/man.png";

function App() {
  // const name ="Kairos";
  // const name1 ="Raihan";
  // const name2 ="Wafiqa";
  // const name3 ="Samsul";
  // const name4 ="Zyn";
  const nama5 ="Bambang Pacul";
  const nama6 ="Budi";
  const nama7 ="Ucup";

  return (
    <div className="container">
      <Navbar />
      <Main />
      {/* <h1>Hello World</h1>   */}
      {/* <Car 
        merk="Ferrari" 
        harga={500} 
        isNew={true} 
        colors={["Hitam", "Putih", "Abu-Abu"]}  
        beli={() => alert("Sudah dibeli")}
      />    
      <User 
        name={name}
        alamat="Jakarta"
        angkatan={11}
        hobis={["Main Bola", "Berenang"]}
        status={true}
        gambar={gambar}
        lihat={() => alert("Profil " + name + " sedang dibuka")}
      />

      <User 
        name={name1}
        alamat="Jakarta"
        angkatan={11}
        hobis={["Main Bola", "Berenang"]}
        status={true}
        gambar="https://www.carsome.id/news/wp-content/uploads/Rush-S-TRD-Sport-1024x768.jpg"
        lihat={() => alert("Profil " + name1 + " sedang dibuka")}
      />

      <User 
        name={name2}
        alamat="Jakarta"
        angkatan={11}
        hobis={["Main Bola", "Berenang"]}
        status={true}
        lihat={() => alert("Profil " + name2 + " sedang dibuka")}
      />

      <User 
        name={name3}
        alamat="Jakarta"
        angkatan={11}
        hobis={["Main Bola", "Berenang"]}
        status={true}
        lihat={() => alert("Profil " + name3 + " sedang dibuka")}
      />

      <User 
        name={name4}
        alamat="Jakarta"
        angkatan={11}
        hobis={["Main Bola", "Berenang"]}
        status={true}
        lihat={() => alert("Profil " + name4 + " sedang dibuka")}
      /> */}
      <Footer nama="Zyn Kairos"/>
    </div>
  );
};


export default App;
