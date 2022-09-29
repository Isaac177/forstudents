import * as  React  from "react";


const FirstSectionComponent = ({image, title,rating,description}) => {
    return (
        <article>
            <div className='card-container'>
                <div className='card-img'>
                    <img src={image} alt={image} width="350" height = "400"/>
                </div>
                <div className='card-text'>
                    <div className='card-title'>
                        <h3>{title}</h3>
                        <span>{rating}</span>
                    </div>
                    <div className='card-description'>
                        <p>{description}</p>
                    </div>
                    <div className='card-button'>
                        <button className='card-button-style'>Explore</button>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default FirstSectionComponent;
