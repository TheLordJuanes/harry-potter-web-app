import React from 'react';
import {Badge, Button, Card} from "react-daisyui";
import PropTypes from "prop-types";

export default function CharacterCard({character}) {
    return (
        <>
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg" side="lg">
                <Card.Image src={character.image !== null ? character.image : "https://potterdb.com/images/missing_character.svg"} alt="Character image"/>
                <Card.Body>
                    <Card.Title tag="h2">{character.name}</Card.Title>
                    <p>Species: {character.species !== null ? (character.species === "Human" ? <Badge color="success">{character.species}</Badge> : <Badge color="warning">{character.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Gender: {character.gender !== null ? (character.gender === "Male" || character.gender === "Male (most likely)" ? <Badge color="info">{character.gender}</Badge> : <Badge color="secondary">{character.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Nationality: {character.nationality !== null ? <Badge color="accent">{character.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <Card.Actions className="justify-end">
                        <Button color="primary">Details</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </>
    );
}

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired
}
