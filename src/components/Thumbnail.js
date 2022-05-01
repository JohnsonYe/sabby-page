import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = function({title, redirectUrl, image, index}) {
    const createThumbnail = function (thumbnailName, thumbnailUrl, thumbnailImage) {
        return (
            <div className="thumbnail">
                <Link to={thumbnailUrl} className={`thumbnail-${thumbnailName}`} onClick={()=>scrollToTop()}>
                    <img className="thumbnail-image" src={thumbnailImage}/>
                    <div className="thumbnail-image-name">
                        {thumbnailName}
                    </div>
                </Link>
            </div>
        );
    }

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="thumbnail-container" key={`thumbnail-container-${index}`}>
            {createThumbnail(title, redirectUrl, image)}
        </div>
    )
};

export default Thumbnail;