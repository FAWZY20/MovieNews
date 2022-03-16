import React from 'react';
import './Tcinema.css';


function Tcinema({ movie }) {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    return (
        <div className='Movie-card-list' >
            <div className='Movie-card' >
                {movie?.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} width={300} height={400} alt="" /> : null}
                <h5>{movie?.title}</h5>
            </div>
        </div>
    );
}

export default Tcinema;