import React, {useEffect, useState} from 'react';
import {Button, Menu, Navbar} from "react-daisyui";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../firebase-config.js";
import {signOut} from "firebase/auth";
import {setEmailInStore} from "../redux/userSlice.js";

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

export default function NavBarComponent() {

    const dispatch = useDispatch()
    const [harryPotterUserEmail, setHarryPotterUserEmail] = useState(
        useSelector((state) => state.harryPotterUser.userEmail)
    )

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setEmailInStore({userEmail: ""}))
            window.location.href = "/";
        })
    }

    return (
        <>
            <Navbar className="bg-base-100 mb-20 shadow-xl rounded-box">
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
