import * as React from "react";
import './navbar.sass';
import heroImg from "../../assets/img/heroImg.png";


const Hero = () => {
    return (
        <div className='hero__container'>
            <div className='hero__text'>
                <h1 className='hero__title'>Find Your
                    <span>Helper</span>
                </h1>
                <p className='hero__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <div className='hero__buttons'>
                    <button className='hero__btn'>Learn More</button>
                    <button className='hero__btn'>Find Your Helper</button>
                </div>
            </div>
            <div className='hero__img hexagon'>
                <img src={heroImg} alt='hero' />
            </div>
        </div>
    )
};


export default Hero;



