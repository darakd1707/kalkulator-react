import React from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from 'react';
// import Media from './components/media';
// import Alert from './components/alert';


// export default function BMI() {
//   const [berat, setBerat] = useState(null);
//   const [tinggi, setTinggi] = useState(null);
//   const [bmi, setBmi] = useState(null);
//   const [pesan, setPesan] = useState("");

//   function hitung() {
//     const hasilBMI = berat / ((tinggi / 100) * (tinggi / 100))
//     setBmi(hasilBMI)

//     let pesan = getBMI(hasilBMI)
//     setPesan(pesan)

//     setBerat("")
//     setTinggi("")
//   }

//   const getBMI = (bmi) => {
//     if (bmi < 18.5) {
//       return "kurus"
//     }
//     if (bmi > 18.5 && bmi < 25) {
//       return "biasa aja";
//     }

//     if (bmi > 25 && bmi < 30) {
//       return "gendut";
//     }

//     if (bmi > 30) {
//       return "mending diet";
//     }
//   }

//   return (
//     <div className="App container col-sm-6">
//       <div className="card text-center">
//         <div className="card-header fs-2">Body Mass Index</div>
//         <div className="card-body">
//           <div className="input-group my-2">
//             <span className="input-group-text">Berat</span>
//             <input type="number" name="berat" className="form-control" min={0} value={berat} onChange={(event) => setBerat(event.target.value)} />
//           </div>
//           <div className="input-group my-2">
//             <span className="input-group-text">Tinggi</span>
//             <input type="number" name="tinggi" className="form-control" min={0} value={tinggi} onChange={(event) => setTinggi(event.target.value)} />
//           </div>
//         </div>
//         <div className="card-footer text-body-secondary">
//           <div className="d-grid gap-2 mb-4">
//             <button className="btn btn-primary" type="button" onClick={hitung}>
//               Hitung
//             </button>
//           </div>
//           <h2>Hasil</h2>
//           {bmi && (
//             <div className="mt-4">
//               <p className="colour">BMI mu {bmi}</p>
//               <p className="colour">Kamu {pesan}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

const App = () => {
  return (
    <div> 
      <hr />
        <Link to="/" >Home</Link>|
        <Link to="/bmi" >BMI</Link>|
        <Link to="/biner" >biner</Link>|
        <Link to="/cicilan" >cicilan</Link>|
        <Link to="/hargaakhir" >harga akhir</Link>|
        <Link to="/desimal" >desimal</Link>|
        <Link to="/heksadesimal" >heksadesimal</Link>|
        <Link to="/oktal" >oktal</Link>|
        {/* <Link to="/about" >About</Link>|
        <Link to="/project" >Project</Link>|
        <Link to="/contact" >Contact</Link>|
        <Link to="/gallery" >Gallery</Link>|
        <Link to="/cart" >Cart</Link>|
        <Link to="/pegawai" >Pegawai</Link> */}
      <hr />
      <p><Main /></p>
    </div>
  );
}

export default App;