// import gambar from "./../man.png";
import "./User.css";

const User = ({ 
  // name, 
  nama,
  member,
  message,
  // alamat, 
  // angkatan, 
  // hobis, 
  // status, 
  // gambar, 
  // video, 
  // lihat 
}) => {
  // const tableStyle = {
  //   border: "1px solid black",
  //   width: "300px",
  //   margin: "20px auto",
  // };

  // const headerStyle = { 
  //   textAlign: "center",
  //   fontWeight: "bold"
  // };

  // const cellStyle = { textAlign: "center"};
    return (
      // <>
      //   <ol>
      //       <li>Nama : {name}</li>
      //       <li>Alamat : {alamat}</li>
      //       <li>Angkatan : {angkatan}</li>
      //       <li>Hobi : {hobis.map((hobi) => hobi + ", ")}</li>
      //       <li>Status : {status ? "lulus" : "sedang Belajar"}</li>
      //       <img src={gambar} alt=""/>
      //   </ol>
      //   <button onClick={lihat}>Lihat</button>
      // </>
      <div>
        <table className="card">
          <thead className="card-head">
            <tr>
              <td colSpan={2}>
                {nama}
              </td>
            </tr>        
          </thead>
          <tbody className="card-body">
            <tr>
              <td colSpan={2}> 
                {member}
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={message}>Message</button>
              </td>
              <td>
                <button>Subscribe</button>
              </td>
            </tr>
          </tbody>                               
        </table>
      </div>
    );
  };

  export default User