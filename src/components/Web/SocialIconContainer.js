import React from 'react'
//components
import SocialIcon from './SocialIcon'
//images
import facebook from '../../images/facebook.svg';
import insta from '../../images/insta.svg';
import twitter from '../../images/twitter.svg';



const SocialIconContainer = (props) => {
   
    const content = socials.map((social) =>
    <SocialIcon
            key={social.id}
            img={social.image}
            alt={social.alt}
            link={social.link}
          />
    );
    return (
        <div className='social'>
        {content}
        </div>
    );
};

const socials = [
    {id: 1, image: twitter, alt: 'Twitter icon', link: 'https://www.twitter.com/'},
    {id: 2, image: facebook, alt: 'Facebook icon', link: 'https://www.facebook.com/'},
    {id: 3, image: insta, alt: 'Instagram icon',  link: 'https://www.instagram.com/'},

];

export default SocialIconContainer;