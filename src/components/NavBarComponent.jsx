import React, {useEffect, useState} from 'react';
import {Dropdown, Menu, Navbar} from "react-daisyui";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../firebase-config.js";
import {signOut} from "firebase/auth";
import {setEmailInStore} from "../redux/userSlice.js";
import {useLocation} from "react-router";

export default function NavBarComponent() {

    const [activeButton, setActiveButton] = useState("");

    const location = useLocation();

    const handleHome = () => {
        window.location.href = "/home";
    }

    const handleCharacters = () => {
        window.location.href = "/home/characters";
    }

    const handleMovies = () => {
        window.location.href = "/home/movies";
    }

    const handlePotions = () => {
        window.location.href = "/home/potions";
    }

    const dispatch = useDispatch()

    const [harryPotterUserEmail] = useState(
        useSelector((state) => state.harryPotterUser.userEmail)
    )

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setEmailInStore({userEmail: ""}))
            window.location.href = "/";
        })
    }

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/home") {
            setActiveButton(null);
        } else if (currentPath === "/home/characters") {
            setActiveButton("characters");
        } else if (currentPath === "/home/movies") {
            setActiveButton("movies");
        } else if (currentPath === "/home/potions") {
            setActiveButton("potions");
        }
    }, [location.pathname]);

    return (
        <>
            <Navbar className="bg-base-100 mb-48 shadow-xl rounded-box">
                <Navbar.Start>
                    <a className="btn btn-ghost normal-case text-xl" onClick={handleHome}>Harry Potter DB</a>
                </Navbar.Start>
                <Navbar.Center className="lg:flex">
                    <Menu horizontal className="px-1 bg-base-200 rounded-box">
                        <Menu.Item>
                            <a className={activeButton === "characters" ? "active" : ""} onClick={handleCharacters}>Characters</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a className={activeButton === "movies" ? "active" : ""} onClick={handleMovies}>Movies</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a className={activeButton === "potions" ? "active" : ""} onClick={handlePotions}>Potions</a>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
                            {harryPotterUserEmail}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-52 mt-4">
                            <Dropdown.Item style={{ color: 'black', backgroundColor: '#f87272' }} onClick={handleLogout}>LOGOUT</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.End>
            </Navbar>
        </>
    );
}
