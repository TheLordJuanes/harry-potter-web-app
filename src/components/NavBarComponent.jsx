import React, {useState} from 'react';
import {Button, Menu, Navbar} from "react-daisyui";
import {useDispatch} from "react-redux";
import {setEmailInStore} from "../redux/userSlice.js";
import {auth} from "../firebase-config.js";
import {signOut} from "firebase/auth";

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

const handleLogout = () => {
    signOut(auth).then(() => {
        localStorage.removeItem("userEmail")
        window.location.href = "/";
    })
}

const getEmailFromLocalStorage = () => {
    return localStorage.getItem("userEmail")
}

export default function NavBarComponent() {
    if (getEmailFromLocalStorage() === null) {
        window.location.href = "/";
        return
    }
    const dispatch = useDispatch()
    dispatch(setEmailInStore({userEmail: getEmailFromLocalStorage()}))

    const [harryPotterUserEmail, setHarryPotterUserEmail] = useState(getEmailFromLocalStorage())

    return (
        <>
            <Navbar className="bg-base-100 mb-48 shadow-xl rounded-box">
                <Navbar.Start>
                    <a className="btn btn-ghost normal-case text-xl" onClick={handleHome}>Harry Potter DB</a>
                </Navbar.Start>
                <Navbar.Center className="lg:flex">
                    <Menu horizontal className="px-1 bg-base-200 rounded-box">
                        <Menu.Item>
                            <a onClick={handleCharacters}>Characters</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a onClick={handleMovies}>Movies</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a onClick={handlePotions}>Potions</a>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Menu horizontal>
                        <Menu.Item>
                            <details>
                                <summary>{harryPotterUserEmail}</summary>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <Button tag="a" color="error" onClick={handleLogout}>Logout</Button>
                                    </li>
                                </ul>
                            </details>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </>
    );
}
