import React, {useEffect, useState} from 'react';
import axios from "../config/axios.js";
import CharacterCard from "../components/CharacterCard.jsx";
import {Outlet} from "react-router";

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        await axios.get("/characters")
            .then((response) => setCharacters(response.data.data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {getCharacters()},[]);

    const renderCharacters = () => {
        return characters.map((character) => <CharacterCard key={character.id} character={character.attributes} />)
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {renderCharacters()}
        </div>
    );
}
