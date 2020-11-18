import React from 'react';

const Card = ({ img, name, date, id }) => {
    const url = 'https://image.tmdb.org/t/p/w500/';
    return (
        <div id={id} className='card-wrapper'>
            <div>
                <img src={`${url}/${img}`} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Card;