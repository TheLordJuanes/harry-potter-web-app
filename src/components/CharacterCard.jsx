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
                <Card.Image src={character.attributes.image !== null ? character.attributes.image : "https://potterdb.com/images/missing_character.svg"} alt="Character image"/>
                <Card.Body>
                    <Card.Title tag="h2">{character.attributes.name}</Card.Title>
                    <p>Species: {character.attributes.species !== null ? (character.attributes.species === "Human" ? <Badge color="success">{character.attributes.species}</Badge> : <Badge color="warning">{character.attributes.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Gender: {character.attributes.gender !== null ? (character.attributes.gender === "Male" || character.attributes.gender === "Male (most likely)" ? <Badge color="info">{character.attributes.gender}</Badge> : <Badge color="secondary">{character.attributes.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Nationality: {character.attributes.nationality !== null ? <Badge color="accent">{character.attributes.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <Modal ref={ref}>
                                <Modal.Header className="font-bold text-center">{character.attributes.name}</Modal.Header>
                                <Modal.Body>
                                    <img src={character.attributes.image !== null ? character.attributes.image : "https://potterdb.com/images/missing_character.svg"} className="max-w-sm rounded-lg shadow-2xl mx-auto"  alt="Character image"/>
                                    <br/>
                                    <p className="text-lg">Species: {character.attributes.species !== null ? (character.attributes.species === "Human" ? <Badge color="success">{character.attributes.species}</Badge> : <Badge color="warning">{character.attributes.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Gender: {character.attributes.gender !== null ? (character.attributes.gender === "Male" || character.attributes.gender === "Male (most likely)" ? <Badge color="info">{character.attributes.gender}</Badge> : <Badge color="secondary">{character.attributes.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Nationality: {character.attributes.nationality !== null ? <Badge color="accent">{character.attributes.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">House: {character.attributes.house !== null ? <Badge color="primary">{character.attributes.house}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Wands: {character.attributes.wands !== null ? <Badge color="success">{character.attributes.wands}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Patronus: {character.attributes.patronus !== null ? <Badge color="warning">{character.attributes.patronus}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Titles: {character.attributes.titles !== null ? <Badge color="info">{character.attributes.titles}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Blood status: {character.attributes.blood_status !== null ? <Badge color="warning">{character.attributes.blood_status}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Alias names: {character.attributes.alias_names !== null ? <Badge color="info">{character.attributes.alias_names}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Animagus: {character.attributes.animagus !== null ? <Badge color="secondary">{character.attributes.animagus}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Boggart: {character.attributes.boggart !== null ? <Badge color="accent">{character.attributes.boggart}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Born: {character.attributes.born !== null ? <Badge color="primary">{character.attributes.born}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Died: {character.attributes.died !== null ? <Badge color="success">{character.attributes.died}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Eye colour: {character.attributes.eye_color !== null ? <Badge color="warning">{character.attributes.eye_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Hair colour: {character.attributes.hair_color !== null ? <Badge color="info">{character.attributes.hair_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Family members: {character.attributes.family_members !== null ? character.attributes.family_members : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Height: {character.attributes.height !== null ? <Badge color="accent">{character.attributes.height}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Weight: {character.attributes.weight !== null ? character.attributes.weight : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Romances: {character.attributes.romances !== null ? <Badge color="warning">{character.attributes.romances}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Skin color: {character.attributes.skin_color !== null ? <Badge color="info">{character.attributes.skin_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Jobs: {character.attributes.jobs !== null ? character.attributes.jobs : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Wiki: {character.attributes.wiki !== null ? character.attributes.wiki : <Badge color="neutral">Unknown</Badge>}</p>
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
