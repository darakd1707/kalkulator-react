import React from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
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
      <hr />
      <p><Main /></p>
    </div>
  );
}

export default App;
