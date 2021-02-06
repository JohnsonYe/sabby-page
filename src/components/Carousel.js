import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carousel_Images({images}) {
    return (
        <Carousel>
            {images.map((image, index) => 
                <div className="carousel_image" key={index} style={{height: '500px'}}>
                    <img src={image} style={{height: '100%'}} />
                </div>
            )}
        </Carousel>
    );
}

export default Carousel_Images;