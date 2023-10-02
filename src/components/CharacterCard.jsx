import React, {useCallback, useRef} from 'react';
import {Badge, Button, Card} from "react-daisyui";
import PropTypes from "prop-types";
import CharacterModal from "./CharacterModal.jsx";

export default function CharacterCard({character}) {

    const ref = useRef(null);

    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);

    const handleClose = () => {
        ref.current?.close()
    }

    return (
        <>
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg h-full w-full" side="lg">
                <Card.Image src={character.image !== null ? character.image : "https://potterdb.com/images/missing_character.svg"} alt="Character image"/>
                <Card.Body>
                    <Card.Title className="text-center" tag="h2">{character.name}</Card.Title>
                    <div className="flex-grow">
                        <p>Species: {character.species !== null ? (character.species === "Human" ? <Badge color="success">{character.species}</Badge> : <Badge color="warning">{character.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                        <p>Gender: {character.gender !== null ? (character.gender === "Male" || character.gender === "Male (most likely)" ? <Badge color="info">{character.gender}</Badge> : <Badge color="secondary">{character.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                        <p>Nationality: {character.nationality !== null ? <Badge color="accent">{character.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    </div>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <CharacterModal modalRef={ref} character={character} handleClose={handleClose} />
                        </div>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </>
    );
}

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired
}


