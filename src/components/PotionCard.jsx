import React from 'react';
import PropTypes from "prop-types";
import {Badge, Button, Card} from "react-daisyui";

export default function PotionCard({potion}) {
    return (
        <>
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg" side="lg">
                <Card.Image src={potion.image !== null ? potion.image : "https://potterdb.com/images/missing_potion.svg"} alt="Potion image"/>
                <Card.Body>
                    <Card.Title tag="h2">{potion.name}</Card.Title>
                    <p>Effect: {potion.effect !== null ? potion.effect : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Difficulty: {potion.difficulty !== null ? (potion.difficulty === 'Advanced' || potion.difficulty === 'One of a kind' || potion.difficulty === 'Advanced or Beginner' ? <Badge color="error">{potion.difficulty}</Badge> : (potion.difficulty === 'Moderate' || potion.difficulty === 'Moderate to Advanced' || potion.difficulty === 'Moderate to advanced' || potion.difficulty === 'Moderate/Advanced' ? <Badge color="warning">{potion.difficulty}</Badge> : <Badge color="info">{potion.difficulty}</Badge>)) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Characteristics: {potion.characteristics !== null ? potion.characteristics : <Badge color="neutral">Unknown</Badge>}</p>
                    <Card.Actions className="justify-end">
                        <Button color="primary">Details</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </>
    );
}

PotionCard.propTypes = {
    potion: PropTypes.object.isRequired
}
