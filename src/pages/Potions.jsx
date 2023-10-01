import React from 'react';
import ElementCard from "../components/ElementCard.jsx";
import axios from "../config/axios.js";

export default function Potions() {
    const getPotions = async () => {
        const response = await axios.get("/potions");
    }

    return (
        <ElementCard/>
    );
}