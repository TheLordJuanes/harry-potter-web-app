import React from 'react';
import {Badge, Button, Modal} from "react-daisyui";
import PropTypes from "prop-types";

export default function MovieModal({modalRef, movie, handleClose}) {
    return (
        <Modal ref={modalRef}>
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
                <p className="text-lg">Trailer: {movie.trailer !== null ? <a style={{color: "aliceblue", textDecoration: "underline"}} href={movie.trailer} target="_blank" rel="noopener noreferrer">Ver Trailer</a> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Budget: {movie.budget !== null ? <Badge color="success">{movie.budget}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Box office: {movie.box_office !== null ? <Badge color="warning">{movie.box_office}</Badge> : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Directors: {movie.directors !== null ? movie.directors.map((director, index) => {
                        return <Badge key={index} color="info">{director}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Cinematographers: {movie.cinematographers !== null ? movie.cinematographers.map((cinematographer, index) => {
                        return <Badge key={index} color="warning">{cinematographer}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Editors: {movie.editors !== null ? movie.editors.map((editor, index) => {
                        return <Badge key={index} color="info">{editor}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Distributors: {movie.distributors !== null ? movie.distributors.map((distributor, index) => {
                        return <Badge key={index} color="secondary">{distributor}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Music composers: {movie.music_composers !== null ? movie.music_composers.map((music_composer, index) => {
                        return <Badge key={index} color="accent">{music_composer}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Producers: {movie.producers !== null ?
                    movie.producers.map((producer, index) => {
                        return <Badge key={index} color="primary">{producer}</Badge>
                    }
                ) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Screenwriters: {movie.screenwriters !== null && movie.screenwriters.length > 0 ? movie.screenwriters.map((screenwriter, index) => {
                    return <Badge key={index} color="success">{screenwriter}</Badge>
                }) : <Badge color="neutral">Unknown</Badge>}</p>
                <p className="text-lg">Wiki: {movie.wiki !== null ? <a style={{color: "aliceblue", textDecoration: "underline"}} href={movie.wiki} target="_blank" rel="noopener noreferrer">Ver Wiki</a> : <Badge color="neutral">Unknown</Badge>}</p>
            </Modal.Body>
            <Modal.Actions>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    );
}

MovieModal.propTypes = {
    modalRef: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
}
