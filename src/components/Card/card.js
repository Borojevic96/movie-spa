import React from 'react';

const Card = (props) => {
    const url = 'https://image.tmdb.org/t/p/w500/';
    return (
        <div id={props.id} className='card-wrapper'>
            <div>
                <img src={url + props.img} alt={props.name} />
            </div>
            <div>
                <h1>{props.name}</h1>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default Card;