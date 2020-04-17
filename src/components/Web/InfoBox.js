import React from 'react';

const InfoBox = (props) => {
    return (
        <div className={props.class}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <p>{props.boxContent}</p>
        </div>
    );
};

export default InfoBox;