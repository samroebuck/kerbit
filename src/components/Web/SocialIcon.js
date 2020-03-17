import React from 'react';

const SocialIcon = (props) => {
    return (
        <a className='social__icon' href={props.link}>
            <img src={props.img} alt={props.alt} />
        </a>
    );
};

export default SocialIcon;