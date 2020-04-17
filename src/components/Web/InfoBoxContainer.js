import React from 'react';
import InfoBox from './InfoBox';
import search from '../../images/find-white.svg';
import download from '../../images/down-white.svg';
import picture from '../../images/photo-white.svg';
import recycle from '../../images/recycle-white.svg';


const InfoBoxContainer = (props) => {
   
    const content = boxes.map((box) =>
    <InfoBox
            key={box.id}
            imgSrc={box.image}
            imgAlt={box.alt}
            boxContent={box.content}
            class={box.class}
          />
    );
    return (
        <div className='steps'>
        <h2>RECYCLING FOR LEEDS RESIDENTS IN 4 EASY STEPS</h2>
        {content}
        </div>
    );
};

const boxes = [
    {id: 1, image: search, alt: 'Search icon', class: 'steps__box steps__box--first', content: 'Find an item you want to recycle'},
    {id: 2, image: download, alt: 'Download icon', class: 'steps__box steps__box--second', content: 'Put the item down in a clear uncluttered location'},
    {id: 3, image: picture, alt: 'Picture icon', class: 'steps__box steps__box--third', content: 'Snap a photo of your item'},
    {id: 4, image: recycle, alt: 'Recycling icon', class: 'steps__box steps__box--fourth', content: 'Kerbit will let you know if you can recycle it in Leeds'},
];

export default InfoBoxContainer;