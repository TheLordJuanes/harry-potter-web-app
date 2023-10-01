import React from 'react';
import axios from "../config/axios.js";
import TableComponent from "../components/TableComponent.jsx";

export default function Characters() {

    const getCharacters = async () => {
        const response = await axios.get("/characters");
    }

    return (
        <TableComponent/>
    );
}
