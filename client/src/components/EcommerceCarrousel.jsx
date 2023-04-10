import React, { useState } from 'react';

//IMPORT CSS COMPONENTS STYLES
import '../assets/styles/componentsStyles.css'
//BOOTSTRAP IMPORTS
import Carousel from 'react-bootstrap/Carousel';

//IMPORT ICONS
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function EcommerceCarrousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://w0.peakpx.com/wallpaper/212/91/HD-wallpaper-woman-black-outfit-summer-ultra-girls-girl-beautiful-portrait-black-woman-young-beauty-model-pretty-aesthetic-blackhat.jpg"
                    alt="First slide"
                />
                
                <Carousel.Caption>
                
                    <h3 className='carrousel-img-text'>Level up your style with our summer collections</h3>
                    <button className='btn-shop-now-carrousel'>Shop now <AiOutlineArrowRight/></button>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.adorama.com/alc/wp-content/uploads/2022/05/Brandonwoelfel12.jpg"
                    alt="Second slide"
                />
                

                <Carousel.Caption>
                
                    <h3 className='carrousel-img-text'>New Clothes, New Passion.</h3>
                    <button className='btn-shop-now-carrousel'>Shop now <AiOutlineArrowRight/></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://iso.500px.com/wp-content/uploads/2022/07/Diana-By-Mateusz-Stefanowski-2.jpeg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                
                    <h3 className='carrousel-img-text'> Complement your flawless beauty.</h3>
                    <button className='btn-shop-now-carrousel'>Shop now <AiOutlineArrowRight/></button>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    )
}
