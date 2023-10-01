import React from 'react';
import {Button, Card} from "react-daisyui";
import PropTypes from "prop-types";

export default function MovieCard({movie}) {
    return (
        <>
            <Card className="max-w-sm mx-auto overflow-hidden shadow-lg" side="lg">
                <Card.Image src={movie.poster} alt="Movie poster"/>
                <Card.Body>
                    <Card.Title tag="h2">{movie.title}</Card.Title>
                    <p>Rating: {movie.rating}</p>
                    <p>Release date: {movie.release_date}</p>
                    <p>Running time: {movie.running_time}</p>
                    <Card.Actions className="justify-end">
                        <Button color="primary">Details</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}
