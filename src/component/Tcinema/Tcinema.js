import './Tcinema.css';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
  query GetMovie {
    results {
      id
    }
  }
`;


function Tcinema() {
    return (
        <div className='container-fluid tendance-movie' >
            <div className='container' >
                <div className='row'>
                    <div className='list-movie'>
                        <h2>TENDANCE DE LA SEMAINE DANS LA CATEGORIE FILM</h2>
                    </div>
                    <a href=''>Tout les films en tendance cette semaine</a>
                </div>
            </div>
        </div>
    );
}

export default Tcinema;