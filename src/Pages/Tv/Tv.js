import './Tv.css';
import { useState, useEffect } from 'react';
import api from '../../api/api';


function Tv() {

    const [movies, setMovies] = useState([])
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

    const fetchMovies = async () => {
        const { data } = await api.get(`trending/tv/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        setMovies(data.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div className="container">
            <div className="container-fluid" >
                <div className="row" >
                    <h1 className="tv-title" >Tendance Tv</h1>
                    <div className='tv-list'>
                        {
                            movies.map((movie) => (
                                <div className='tv-block'>
                                    <img src={`${IMAGE_PATH}${movie.poster_path}`} width={200} height={250} alt="" />
                                    <h3 className='tv-title' >{movie.title}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tv;