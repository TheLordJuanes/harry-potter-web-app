import React from "react";
import {Hero} from "react-daisyui";
import LoginCard from "../components/LoginCard.jsx";
import {Outlet} from "react-router";

const getEmailFromLocalStorage = () => {
    return localStorage.getItem("userEmail")
}
export default function Auth() {

    if (getEmailFromLocalStorage() !== null) {
        window.location.href = "/home";
        return
    }

    return (
        <>
            <Hero className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
                <Hero.Content className="flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-4 mt-12">Welcome to the Harry Potter World</h1>
                        <p className="text-2xl mb-12">The best place to find your favorite Harry Potter characters, movies, and potions!</p>
                    </div>
                    <Outlet/>
                </Hero.Content>
            </Hero>
        </>
    )
}
