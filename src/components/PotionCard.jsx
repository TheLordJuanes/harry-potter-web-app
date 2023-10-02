import React, {useCallback, useRef} from 'react';
import PropTypes from "prop-types";
import {Badge, Button, Card} from "react-daisyui";
import PotionModal from "./PotionModal.jsx";

export default function PotionCard({potion}) {

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
                <Card.Image src={potion.image !== null ? potion.image : "https://potterdb.com/images/missing_potion.svg"} alt="Potion image"/>
                <Card.Body>
                    <Card.Title tag="h2">{potion.name}</Card.Title>
                    <div className="flex-grow">
                        <p>Effect: {potion.effect !== null ? potion.effect : <Badge color="neutral">Unknown</Badge>}</p>
                        <p>Difficulty: {potion.difficulty !== null ? (potion.difficulty === 'Advanced' || potion.difficulty === 'One of a kind' || potion.difficulty === 'Advanced or Beginner' ? <Badge color="error">{potion.difficulty}</Badge> : (potion.difficulty === 'Moderate' || potion.difficulty === 'Moderate to Advanced' || potion.difficulty === 'Moderate to advanced' || potion.difficulty === 'Moderate/Advanced' ? <Badge color="warning">{potion.difficulty}</Badge> : <Badge color="info">{potion.difficulty}</Badge>)) : <Badge color="neutral">Unknown</Badge>}</p>
                        <p>Characteristics: {potion.characteristics !== null ? potion.characteristics : <Badge color="neutral">Unknown</Badge>}</p>
                    </div>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <PotionModal modalRef={ref} potion={potion} handleClose={handleClose} />
                        </div>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </>
    );
}

PotionCard.propTypes = {
    potion: PropTypes.object.isRequired
}
