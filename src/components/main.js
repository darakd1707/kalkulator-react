import React from "react";
import { Route, Routes, } from 'react-router-dom';

import Home from "./home";
// import About from "./about";
// import Project from "./project";
// import Contact from "./contact";
// import Gallery from '../pages/Gallery';
// import Cart from "../pages/Cart";
// import Pegawai from "./Pegawai";
import Bmi from '../kalkulator/bmi';
import BinaryConverter from "../kalkulator/konversibiner";
import Cicilan from "../kalkulator/cicilan";
import Hargaakhir from "../kalkulator/hargaakhir";
import Desimal from "../kalkulator/konversidesimal";
import Heksadesimal from "../kalkulator/konversiheksadesimal";
import Oktal from "../kalkulator/konversioktal";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        {/* <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/pegawai" element={<Pegawai />}/> */}
        <Route path='/bmi' element={<Bmi />}/>
        <Route path='/biner' element={<BinaryConverter />}/>
        <Route path='/hargaakhir' element={<Hargaakhir />}/>
        <Route path='/cicilan' element={<Cicilan />}/>
        <Route path='/desimal' element={<Desimal />}/>
        <Route path='/heksadesimal' element={<Heksadesimal />}/>
        <Route path='/oktal' element={<Oktal />}/>
    </Routes>
)

export default Main;