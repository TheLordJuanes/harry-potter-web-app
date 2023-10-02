import React from 'react';
import {Badge, Button, Modal} from "react-daisyui";
import PropTypes from "prop-types";

export default function PotionModal({modalRef, potion, handleClose}) {
    return (
        <Modal ref={modalRef}>
            <Modal.Header className="font-bold text-center">{potion.name}</Modal.Header>
            <Modal.Body>
                <img src={potion.image !== null ? potion.image : "https://potterdb.com/images/missing_character.svg"} className="max-w-sm rounded-lg shadow-2xl mx-auto"  alt="Character image"/>
                <br/>
                <p className="text-lg">Effect: {potion.effect !== null ? potion.effect : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Difficulty: {potion.difficulty !== null ? (potion.difficulty === 'Advanced' || potion.difficulty === 'One of a kind' || potion.difficulty === 'Advanced or Beginner' ? <Badge color="error">{potion.difficulty}</Badge> : (potion.difficulty === 'Moderate' || potion.difficulty === 'Moderate to Advanced' || potion.difficulty === 'Moderate to advanced' || potion.difficulty === 'Moderate/Advanced' ? <Badge color="warning">{potion.difficulty}</Badge> : <Badge color="info">{potion.difficulty}</Badge>)) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Characteristics: {potion.characteristics !== null ? potion.characteristics : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Ingredients: {potion.ingredients !== null ? potion.ingredients : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Side effects: {potion.side_effects !== null ? potion.side_effects : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Time: {potion.time !== null ? <Badge color="warning">{potion.time}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Inventors: {potion.inventors !== null ? <Badge color="info">{potion.inventors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Manufacturers: {potion.manufacturers !== null ? <Badge color="error">{potion.manufacturers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Wiki: {potion.wiki !== null ? <a style={{color: "aliceblue", textDecoration: "underline"}} href={potion.wiki} target="_blank" rel="noopener noreferrer">Ver Wiki</a> : <Badge color="neutral">Unknown</Badge>}</p>
            </Modal.Body>
            <Modal.Actions>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    );
}

PotionModal.propTypes = {
    modalRef: PropTypes.object.isRequired,
    potion: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
}
