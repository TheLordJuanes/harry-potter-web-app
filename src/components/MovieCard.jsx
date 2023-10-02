import React, {useCallback, useRef} from 'react';
import {Badge, Button, Card} from "react-daisyui";
import PropTypes from "prop-types";
import MovieModal from "./ MovieModal.jsx";

export default function MovieCard({movie}) {

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
                <Card.Image src={movie.poster} alt="Movie poster"/>
                <Card.Body>
                    <Card.Title tag="h2">{movie.title}</Card.Title>
                    <p>Rating: {movie.rating !== null ? <Badge color="success">{movie.rating}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Release date: {movie.release_date !== null ? <Badge color="accent">{movie.release_date}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Running time: {movie.running_time !== null ? <Badge color="info">{movie.running_time}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <MovieModal modalRef={ref} movie={movie} handleClose={handleClose}/>
                        </div>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}
