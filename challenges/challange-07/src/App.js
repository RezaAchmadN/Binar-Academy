import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cars" element={<Cars/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
