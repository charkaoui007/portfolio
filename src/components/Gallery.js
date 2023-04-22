import React, { useState } from "react";
import "./gal/Gallery.css"; // Import des styles CSS pour la galerie

// Import des images
import image1 from "./gal/1.jpg";
import image2 from "./gal/2.jpg";
import image3 from "./gal/3.jpg";
import image4 from "./gal/4.jpg";


function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };

    // Tableau d'objets images
    const images = [
        {
            src: image3,
            alt: "Image 3",
        },
        {
            src: image2,
            alt: "Image 2",
        },
        {
            src: image1,
            alt: "Image 1",
        },
        {
            src: image4,
            alt: "Image 4",
        },
      
    ];

    return (
        <div className="gallery-container">
            <div className="image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={index === activeIndex ? "active" : ""}
                    />
                ))}
            </div>
            <button className="prev-btn" onClick={handlePrevClick}>
                &#171;
            </button>
            <button className="next-btn" onClick={handleNextClick}>
                &#187;
            </button>
        </div>
    );
}

export default Gallery;
