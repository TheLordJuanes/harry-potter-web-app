import React from 'react';
import NavBarComponent from "../components/NavBarComponent.jsx";
import {Outlet} from "react-router";
import {Button, Hero} from "react-daisyui";
import QuoteMessage from "../components/QuoteMessage.jsx";

export default function Home() {
    return (
        <>
            <NavBarComponent/>
            <Outlet />
        </>
    );
}
