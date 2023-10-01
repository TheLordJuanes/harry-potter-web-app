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
                <Card.Image src={movie.attributes.poster} alt="Movie poster"/>
                <Card.Body>
                    <Card.Title tag="h2">{movie.attributes.title}</Card.Title>
                    <p>Rating: {movie.attributes.rating !== null ? <Badge color="success">{movie.attributes.rating}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Release date: {movie.attributes.release_date !== null ? <Badge color="accent">{movie.attributes.release_date}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <p>Running time: {movie.attributes.running_time !== null ? <Badge color="info">{movie.attributes.running_time}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                    <Card.Actions className="justify-end">
                        <div className="font-sans">
                            <Button color="primary" onClick={handleShow}>Details</Button>
                            <Modal ref={ref}>
                                <Modal.Header className="font-bold text-center">{movie.attributes.title}</Modal.Header>
                                <Modal.Body>
                                    <img src={movie.attributes.poster !== null ? movie.attributes.poster : "https://potterdb.com/images/missing_character.svg"} className="max-w-sm rounded-lg shadow-2xl mx-auto"  alt="Character image"/>
                                    <br/>
                                    <h2 className="text-2xl font-bold">Summary</h2>
                                    <br/>
                                    <p className="text-justify">{movie.attributes.summary !== null ? movie.attributes.summary : <Badge color="neutral">Unknown</Badge>}</p>
                                    <br/>
                                    <p className="text-lg">Rating: {movie.attributes.rating !== null ? <Badge color="success">{movie.attributes.rating}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Release date: {movie.attributes.release_date !== null ? <Badge color="accent">{movie.attributes.release_date}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Running time: {movie.attributes.running_time !== null ? <Badge color="info">{movie.attributes.running_time}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Trailer: {movie.attributes.trailer !== null ? movie.attributes.trailer : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Budget: {movie.attributes.budget !== null ? <Badge color="success">{movie.attributes.budget}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Box office: {movie.attributes.box_office !== null ? <Badge color="warning">{movie.attributes.box_office}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Directors: {movie.attributes.directors !== null ? <Badge color="info">{movie.attributes.directors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Cinematographers: {movie.attributes.cinematographers !== null ? <Badge color="warning">{movie.attributes.cinematographers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Editors: {movie.attributes.editors !== null ? <Badge color="info">{movie.attributes.editors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Distributors: {movie.attributes.distributors !== null ? <Badge color="secondary">{movie.attributes.distributors}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Music composers: {movie.attributes.music_composers !== null ? <Badge color="accent">{movie.attributes.music_composers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Producers: {movie.attributes.producers !== null ? <Badge color="primary">{movie.attributes.producers}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Screenwriters: {movie.attributes.screenwriters !== null && movie.attributes.screenwriters.length > 0 ? <Badge color="success">{movie.attributes.screenwriters}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                                    <p className="text-lg">Wiki: {movie.attributes.wiki !== null ? movie.attributes.wiki : <Badge color="neutral">Unknown</Badge>}</p>
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
