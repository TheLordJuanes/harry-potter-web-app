import React from 'react';
import NavBarComponent from "../components/NavBarComponent.jsx";
import {Outlet} from "react-router";
import {useSelector} from "react-redux";

export default function Home() {
    const userEmail = useSelector((state) => state.harryPotterUser.userEmail)

    if (userEmail === "") {
        window.location.href = "/login";
        return
    }
    return (
        <>
            <NavBarComponent/>
            <Outlet />
        </>
    );
}
