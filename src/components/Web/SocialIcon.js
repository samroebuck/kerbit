import React from 'react';

const SocialIcon = (props) => {
    return (
        <a className='social__icon' href={props.link} target='_blank'
        rel='noopener noreferrer'>
            <img src={props.img} alt={props.alt} />
        </a>
    );
};

export default SocialIcon;