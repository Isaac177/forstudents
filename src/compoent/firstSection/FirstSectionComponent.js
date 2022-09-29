import * as React from "react";
import './firstSectionComponent.sass';


const FirstSectionComponent = ({image, title, text}) => {
    return(
        <article>
            <div className='howItWorksContainer'>
                <div className='howItWorksContainer-img'>
                    <img src={image} alt={image} />
                </div>
                <div className='howItWorksContainer-title'>
                    <h3>{title}</h3>
                </div>
                <div className='howItWorksContainer-txt'>
                    <p>{text}</p>
                </div>
            </div>
        </article>
    )
}

export default FirstSectionComponent;