import React from 'react';
import './Tcinema.css';
import { useState, useEffect } from 'react';
import api from '../../api/api';

function Tcinema() {

    const [movies, setMovies] = useState([])
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

    const fetchMovies = async () => {
        const { data } = await api.get(`movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        setMovies(data.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div className='container-fluid tendance-movie' >
            <div className='container' >
                <div className='row'>
                    <h2 className='list-title' >TENDANCE DE LA SEMAINE DANS LA CATEGORIE FILM</h2>
                    <div className='list-block'>
                        {
                            movies.slice(0, 5).map((movie) => (
                                <div className='list'>
                                    <img src={`${IMAGE_PATH}${movie.poster_path}`} width={200} height={250} alt="" />
                                    <h3 className='list-movie-title' >{movie?.title}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <a href=''>Tout les séries en tendance cette semaine</a>
                </div>
            </div>
        </div >
    );
}

export default Tcinema;