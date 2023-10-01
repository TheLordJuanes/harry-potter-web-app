import React from 'react';
import ElementCard from "../components/ElementCard.jsx";
import axios from "../config/axios.js";

export default function Movies() {
    const getMovies = async () => {
        const response = await axios.get("/movies");
    }

    return (
        <ElementCard/>
    );
}