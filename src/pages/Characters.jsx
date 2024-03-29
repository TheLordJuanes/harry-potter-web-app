import React, {useEffect, useState} from 'react';
import axios from "../config/axios.js";
import CharacterCard from "../components/CharacterCard.jsx";

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        await axios.get("/characters")
            .then((response) => setCharacters(response.data.data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {getCharacters()},[]);

    const renderCharacters = () => {
        return characters.map((character) => <CharacterCard key={character.id} character={character} />)
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {renderCharacters()}
        </div>
    );
}
