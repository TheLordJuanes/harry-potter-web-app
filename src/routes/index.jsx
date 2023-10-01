import {BrowserRouter, Route, Routes} from "react-router-dom";
import Auth from "../pages/Auth.jsx";
import Home from "../pages/Home.jsx";
import Characters from "../pages/Characters.jsx";
import Movies from "../pages/Movies.jsx";
import Potions from "../pages/Potions.jsx";
import LoginCard from "../components/LoginCard.jsx";
import RegisterCard from "../components/RegisterCard.jsx";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Auth />}>
                <Route path="/"  element={<LoginCard />}/>
                <Route path="login"  element={<LoginCard />}/>
                <Route path="register"  element={<RegisterCard />}/>
            </Route>
            <Route path="/home"  element={<Home />}/>
            <Route path="/characters"  element={<Characters/>}/>
            <Route path="/movies"  element={<Movies/>}/>
            <Route path="/potions"  element={<Potions/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;