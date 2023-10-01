//This code was adapted from https://www.youtube.com/watch?v=tXlZCW26bto
import React, {useEffect, useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import {useParams} from "react-router";
import axios from "../config/axios.js";

export default function Carousel() {
    let {id} = useParams();
    const [character, setCharacter] = useState({});

    const [images, setImages] = useState([]);
    const [isRendered, setIsRendered] = useState(false);

    const getCharacter = () => {
        axios.get('/characters/'+id).then((response) => {
            setCharacter(response.data.data);
            console.log(response.data.data);
        }).catch((error) => console.log(error));
    }

    useEffect(() => {
        if (character.attributes === undefined) return;
        if (character.attributes.image !== null) {
            setImages([{url: character.attributes.image}]);
        } else {
            setImages([{url: "https://potterdb.com/images/missing_character.svg"}]);
        }
        setIsRendered(true);
    }, [character]);

    useEffect(() => {getCharacter()}, []);


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        isRendered && (
            images.length > 1 ?
                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                    <div
                        style={{backgroundImage: `url(${images[currentIndex].url})`}}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div
                        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                    </div>
                    {/* Right Arrow */}
                    <div
                        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30}/>
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {images.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled/>
                            </div>
                        ))}
                    </div>
                </div>
                : <img src={images[0].url} className="max-w-sm rounded-lg shadow-2xl mx-auto" alt="Character image"/>
        )
    );
}