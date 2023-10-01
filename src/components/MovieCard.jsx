import React, {useCallback, useRef} from 'react';
import {Badge, Button, Card, Modal} from "react-daisyui";
import PropTypes from "prop-types";

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
                            <Modal ref={ref}>
                                <Modal.Header className="font-bold text-center">{movie.title}</Modal.Header>
                                <Modal.Body>
                                    <img src={movie.poster !== null ? movie.poster : "https://potterdb.com/images/missing_character.svg"} className="max-w-sm rounded-lg shadow-2xl mx-auto"  alt="Character image"/>
                                    <br/>
                                    <h2 className="text-2xl font-bold">Summary</h2>
                                    <br/>
                                    <p className="text-justify">{movie.summary !== null ? movie.summary : <Badge color="neutral">Unknown</Badge>}</p>
                                    <br/>
                                    <p className="text-lg">Rating: {movie.rating !== null ? <Badge color="success">{movie.rating}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Release date: {movie.release_date !== null ? <Badge color="accent">{movie.release_date}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Running time: {movie.running_time !== null ? <Badge color="info">{movie.running_time}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Trailer: {movie.trailer !== null ? movie.trailer : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Budget: {movie.budget !== null ? <Badge color="success">{movie.budget}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Box office: {movie.box_office !== null ? <Badge color="warning">{movie.box_office}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Directors: {movie.directors !== null ? <Badge color="info">{movie.directors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Cinematographers: {movie.cinematographers !== null ? <Badge color="warning">{movie.cinematographers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Editors: {movie.editors !== null ? <Badge color="info">{movie.editors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Distributors: {movie.distributors !== null ? <Badge color="secondary">{movie.distributors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Music composers: {movie.music_composers !== null ? <Badge color="accent">{movie.music_composers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Producers: {movie.producers !== null ? <Badge color="primary">{movie.producers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Screenwriters: {movie.screenwriters !== null && movie.screenwriters.length > 0 ? <Badge color="success">{movie.screenwriters}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Wiki: {movie.wiki !== null ? movie.wiki : <Badge color="neutral">Unknown</Badge>}</p>
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

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}
