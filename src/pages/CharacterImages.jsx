import Carousel from "../components/Carousel.jsx";
import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "../config/axios.js";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {imageDb} from "../firebase-config.js";
import {Button} from "react-daisyui";

export default function CharacterImages() {

    let {id} = useParams();
    // return (
    //     <Carousel/>
    // )

    const [character, setCharacter] = useState({});
    const [images, setImages] = useState([]);
    const [isRendered, setIsRendered] = useState(false);
    const [imgToUpload, setImgToUpload] = useState(null);
    const userEmail = useSelector((state) => state.harryPotterUser.userEmail);

    useEffect(() => {
        getCharacter()
    }, []);

    const getCharacter = () => {
        axios.get('/characters/' + id).then((response) => {
            setCharacter(response.data.data);
        }).catch((error) => console.log(error));
    }

    useEffect(() => {
        if (character.attributes === undefined) return;
        if (character.attributes.image !== null) {
            setImages([{url: character.attributes.image}]);
        } else {
            setImages([{url: "https://potterdb.com/images/missing_character.svg"}]);
        }
    }, [character]);

    useEffect(() => {
        if (images.length > 0) {
            setIsRendered(true);
        }
    }, [images]);

    const uploadImage = () => {
        const imageRef = ref(imageDb, "images/" + userEmail + "/" + id + "/" + imgToUpload.name)
        uploadBytes(imageRef, imgToUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImages([...images, {url: url}])
            });
            // setImages([...images, {url: snapshot.metadata.}]);

        }).catch((error) => {
            console.log(error);
        });
    }

    if (!isRendered) return null;

    return (
        <>
            <Carousel slides={images}/>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div style={{textAlign: 'center'}}>
                    <input type="file" onChange={(e) => setImgToUpload(e.target.files[0])}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button className="btn-primary" onClick={uploadImage}>Añadir imagen</Button>
                </div>
            </div>
        </>
    );
}