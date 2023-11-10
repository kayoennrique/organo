import React from 'react';
import './Banner.css';

interface BannerProps {
    imageAdress: string
    alternativetext?: string
}

const Banner = ({ imageAdress, alternativetext } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="" alt="O banner principal da página do Organo"/> */}
            <img src={imageAdress} alt={alternativetext}/>
        </header>
    )
}

export default Banner;