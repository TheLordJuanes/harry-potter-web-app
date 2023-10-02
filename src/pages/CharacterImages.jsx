import Carousel from "../components/Carousel.jsx";
import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "../config/axios.js";
import {getDownloadURL, ref, uploadBytes, listAll} from "firebase/storage";
import {imageDb} from "../firebase-config.js";
import {Alert, Button, Input, Loading} from "react-daisyui";

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
    const [firstImageSetted, setFirstImageSetted] = useState(false);
    const [isLoadingFromFirebase, setIsLoadingFromFirebase] = useState(false);
    const [isSavingImageInFirebase, setIsSavingImageInFirebase] = useState(false);
    const [error, setError] = useState("")

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
        setFirstImageSetted(true);
    }, [character]);

    async function fetchData() {
        setIsLoadingFromFirebase(true)
        const imageRef = ref(imageDb, "images/" + userEmail + "/" + id + "/")
        const items = await listAll(imageRef);
        if (items.items.length === 0) return;
        let imagesFromFirebase = [];
        for (const item of items.items) {
            const url = await getDownloadURL(item);
            imagesFromFirebase.push({url: url});
        }
        setImages([...images, ...imagesFromFirebase]);
        setIsLoadingFromFirebase(false);
    }

    useEffect(() => {
        fetchData();
    }, [firstImageSetted]);

    useEffect(() => {
        if (isRendered) return;
        if (images.length > 0) {
            setIsRendered(true);
        }
    }, [images]);

    const uploadImage = () => {
        if (imgToUpload === null) {
            setError("You must select an image to upload!")
            return;
        }
        setError("")
        setIsSavingImageInFirebase(true);
        const imageRef = ref(imageDb, "images/" + userEmail + "/" + id + "/" + imgToUpload.name)
        uploadBytes(imageRef, imgToUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImages([...images, {url: url}])
                setIsSavingImageInFirebase(false);
                setImgToUpload(null)
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    if (!isRendered) return (
        <div style={{ textAlign: 'center' }}>
            <Loading/>
            <p>Loading user information</p>
        </div>
    );

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
                    <input type="file" className="btn-secondary" disabled={isSavingImageInFirebase} onChange={(e) => setImgToUpload(e.target.files[0])}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button className="btn-primary" disabled={isSavingImageInFirebase} onClick={uploadImage}>Añadir imagen</Button>
                </div>
            </div>
            {isLoadingFromFirebase && (
                <div style={{ textAlign: 'center' }}>
                    <Loading/>
                    <p>Loading images from firebase</p>
                </div>
            )}
            {isSavingImageInFirebase && (
                <div style={{ textAlign: 'center' }}>
                    <Loading />
                    <p>Saving image in firebase</p>
                </div>
            )}
            <div style={{margin: "20px"}}>
            {

                error !== "" && (
                    <Alert className="alert-error"
                           icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6"
                                      fill="none" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                           </svg>}>
                        <span>{error}</span>
                    </Alert>)

            }
            </div>
        </>
    );
}