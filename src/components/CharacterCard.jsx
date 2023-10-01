import React, {useCallback, useRef} from 'react';
import {Badge, Button, Card, Modal} from "react-daisyui";
import PropTypes from "prop-types";

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
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg" side="lg">
                <Card.Image src={character.image !== null ? character.image : "https://potterdb.com/images/missing_character.svg"} alt="Character image"/>
                <Card.Body>
                    <Card.Title tag="h2">{character.name}</Card.Title>
                    <p>Species: {character.species !== null ? (character.species === "Human" ? <Badge color="success">{character.species}</Badge> : <Badge color="warning">{character.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Gender: {character.gender !== null ? (character.gender === "Male" || character.gender === "Male (most likely)" ? <Badge color="info">{character.gender}</Badge> : <Badge color="secondary">{character.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Nationality: {character.nationality !== null ? <Badge color="accent">{character.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <Modal ref={ref}>
                                <Modal.Header className="font-bold text-center">{character.name}</Modal.Header>
                                <Modal.Body>
                                    <img src={character.image !== null ? character.image : "https://potterdb.com/images/missing_character.svg"} className="max-w-sm rounded-lg shadow-2xl mx-auto"  alt="Character image"/>
                                    <br/>
                                    <p className="text-lg">Species: {character.species !== null ? (character.species === "Human" ? <Badge color="success">{character.species}</Badge> : <Badge color="warning">{character.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Gender: {character.gender !== null ? (character.gender === "Male" || character.gender === "Male (most likely)" ? <Badge color="info">{character.gender}</Badge> : <Badge color="secondary">{character.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Nationality: {character.nationality !== null ? <Badge color="accent">{character.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">House: {character.house !== null ? <Badge color="primary">{character.house}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Wands: {character.wands !== null ? <Badge color="success">{character.wands}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Patronus: {character.patronus !== null ? <Badge color="warning">{character.patronus}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Titles: {character.titles !== null ? <Badge color="info">{character.titles}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Blood status: {character.blood_status !== null ? <Badge color="warning">{character.blood_status}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Alias names: {character.alias_names !== null ? <Badge color="info">{character.alias_names}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Animagus: {character.animagus !== null ? <Badge color="secondary">{character.animagus}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Boggart: {character.boggart !== null ? <Badge color="accent">{character.boggart}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Born: {character.born !== null ? <Badge color="primary">{character.born}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Died: {character.died !== null ? <Badge color="success">{character.died}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Eye colour: {character.eye_color !== null ? <Badge color="warning">{character.eye_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Hair colour: {character.hair_color !== null ? <Badge color="info">{character.hair_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Family members: {character.family_members !== null ? character.family_members : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Height: {character.height !== null ? <Badge color="accent">{character.height}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Weight: {character.weight !== null ? character.weight : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Romances: {character.romances !== null ? <Badge color="warning">{character.romances}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Skin color: {character.skin_color !== null ? <Badge color="info">{character.skin_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Jobs: {character.jobs !== null ? character.jobs : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Wiki: {character.wiki !== null ? character.wiki : <Badge color="neutral">Unknown</Badge>}</p>
                                </Modal.Body>
                                <Modal.Actions>
                                    <Button onClick={handleClose}>Close</Button>
                                </Modal.Actions>
                            </Modal>
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
