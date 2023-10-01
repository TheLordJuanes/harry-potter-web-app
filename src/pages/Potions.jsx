import React, {useEffect, useState} from 'react';
import axios from "../config/axios.js";
import PotionCard from "../components/PotionCard.jsx";

export default function Potions() {
    const [potions, setPotions] = useState([]);

    const getPotions = async () => {
        await axios.get("/potions")
            .then((response) => setPotions(response.data.data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {getPotions()},[]);

    const renderPotions = () => {
        return potions.map((potion) => <PotionCard key={potion.id} potion={potion.attributes}/>)
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {renderPotions()}
        </div>
    );
}