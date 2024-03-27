import "./Car.css";
//======= Klau mau kelihatan rapi pakai ini ========//
// // const Car = (props) => {
// //   const { merk, harga, isNew, colors } = props;
// //   return (

const Car = ({ 
  merk, 
  harga, 
  isNew, 
  colors, 
  gambar,
  beli 
}) => {

    return (
      // <>
      //   <h3>Merk Mobil : {merk} </h3>
      //   <h4>Harga Mobil : Rp {harga} Miliyar </h4>
      //   <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"} </h5>
      //   <h5>Varian Warna : {colors.map((color) => color + ", ")} </h5>
      //   <button onClick={beli}>Beli</button>
      // </>
      <div className="card">
        <img src={gambar} alt="" />
        <h3>Merk Mobil : {merk} </h3>
        <h4>Harga Mobil : Rp. {harga} </h4>
        <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"} </h5>
        <button onClick={beli}>Beli</button>
      </div>
    );
  };

  export default Car