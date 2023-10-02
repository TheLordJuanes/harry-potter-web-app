import React from 'react';
import {Badge, Button, Modal} from "react-daisyui";
import PropTypes from "prop-types";

export default function CharacterModal({modalRef, character, handleClose}) {
    return (
        <Modal ref={modalRef}>
            <Modal.Header className="font-bold text-center">{character.name}</Modal.Header>
            <Modal.Body>
                <img src={character.image !== null ? character.image : "https://potterdb.com/images/missing_character.svg"} className="max-w-sm rounded-lg shadow-2xl mx-auto"  alt="Character image"/>
                <br/>
                <p className="text-lg">Species: {character.species !== null ? (character.species === "Human" ? <Badge color="success">{character.species}</Badge> : <Badge color="warning">{character.species}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Gender: {character.gender !== null ? (character.gender === "Male" || character.gender === "Male (most likely)" ? <Badge color="info">{character.gender}</Badge> : <Badge color="secondary">{character.gender}</Badge>) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Nationality: {character.nationality !== null ? <Badge color="accent">{character.nationality}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">House: {character.house !== null ? <Badge color="primary">{character.house}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Wands: {character.wands !== null ? character.wands.map((wand, index) => {
                        return <Badge key={index} color="success">{wand}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Patronus: {character.patronus !== null ? <Badge color="ghost">{character.patronus}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Titles: {character.titles !== null ? character.titles.map((title, index) => {
                        return <Badge key={index} color="info">{title}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Blood status: {character.blood_status !== null ? <Badge color="warning">{character.blood_status}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Alias names: {character.alias_names !== null ? character.alias_names.map((alias_name, index) => {
                        return <Badge key={index} color="info">{alias_name}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Animagus: {character.animagus !== null ? <Badge color="secondary">{character.animagus}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Boggart: {character.boggart !== null ? <Badge color="accent">{character.boggart}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Born: {character.born !== null ? <Badge color="primary">{character.born}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Died: {character.died !== null ? <Badge color="success">{character.died}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Eye color: {character.eye_color !== null ? <Badge color="warning">{character.eye_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Hair color: {character.hair_color !== null ? <Badge color="info">{character.hair_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Family members: {character.family_members !== null ? character.family_members.map((family_member, index) => {
                        return <Badge key={index} color="accent">{family_member}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Height: {character.height !== null ? <Badge color="error">{character.height}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Weight: {character.weight !== null ? character.weight : <Badge color="secondary">Unknown</Badge>}</p>
                <p className="text-lg">Romances: {character.romances !== null ? character.romances.map((romance, index) => {
                        return <Badge key={index} color="accent">{romance}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Skin color: {character.skin_color !== null ? <Badge color="primary">{character.skin_color}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Jobs: {character.jobs !== null ? character.jobs.map((job, index) => {
                        return <Badge key={index} color="primary">{job}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Wiki: {character.wiki !== null ? <a style={{color: "aliceblue", textDecoration: "underline"}} href={character.wiki} target="_blank" rel="noopener noreferrer">Ver Wiki</a> : <Badge color="neutral">Unknown</Badge>}</p>
            </Modal.Body>
            <Modal.Actions>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    );
}

CharacterModal.propTypes = {
    modalRef: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
}
