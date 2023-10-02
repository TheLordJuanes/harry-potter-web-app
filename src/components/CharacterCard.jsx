import React, {useCallback, useRef} from 'react';
import {Badge, Button, Card} from "react-daisyui";
import PropTypes from "prop-types";
import CharacterModal from "./CharacterModal.jsx";

export default function CharacterCard({character}) {

    const ref = useRef(null);
    const attributes = character.attributes;
    console.log(character)

    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);

    const handleClose = () => {
        ref.current?.close()
    }

    const handleAddImageButton = () => {
        window.location.href = `/home/characters/${character.id}/images`;
    }

    return (
        <>
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg h-full w-full" side="lg">
                <Card.Image src={attributes.image !== null ? attributes.image : "https://potterdb.com/images/missing_character.svg"} alt="Character image"/>
                <Card.Body>
                    <Card.Title className="text-center" tag="h2">{attributes.name}</Card.Title>
                    <div className="flex-grow">
                        <p>Species: {attributes.species !== null ? (attributes.species === "Human" ? <Badge color="success">{attributes.species}</Badge> : <Badge color="warning">{attributes.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                        <p>Gender: {attributes.gender !== null ? (attributes.gender === "Male" || attributes.gender === "Male (most likely)" ? <Badge color="info">{attributes.gender}</Badge> : <Badge color="secondary">{attributes.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                        <p>Nationality: {attributes.nationality !== null ? <Badge color="accent">{attributes.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    </div>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="secondary" onClick={handleAddImageButton} style={{margin:5}}>Add images</Button>
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <CharacterModal modalRef={ref} character={attributes} handleClose={handleClose} />
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


