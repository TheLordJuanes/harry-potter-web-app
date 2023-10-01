import React from 'react';
import {Button, Menu, Navbar} from "react-daisyui";

const handleHome = () => {
    window.location.href = "/home";
}

const handleCharacters = () => {
    window.location.href = "/characters";
}

const handleMovies = () => {
    window.location.href = "/movies";
}

const handlePotions = () => {
    window.location.href = "/potions";
}

const handleLogout = () => {
    window.location.href = "/";
}

export default function NavBarComponent() {
    return (
        <>
            <Navbar className="bg-base-100 mb-48 shadow-xl rounded-box">
                <Navbar.Start>
                    <a className="btn btn-ghost normal-case text-xl" onClick={handleHome}>Harry Potter API</a>
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
                    <Button tag="a" color="error" onClick={handleLogout}>Logout</Button>
                </Navbar.End>
            </Navbar>
        </>
    );
}
