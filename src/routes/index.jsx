import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Characters from "../pages/Characters.jsx";
import Movies from "../pages/Movies.jsx";
import Potions from "../pages/Potions.jsx";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Login />}/>
            <Route path="/home"  element={<Home />}/>
            <Route path="/characters"  element={<Characters/>}/>
            <Route path="/movies"  element={<Movies/>}/>
            <Route path="/potions"  element={<Potions/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;