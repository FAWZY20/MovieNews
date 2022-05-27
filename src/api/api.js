import axios from 'axios';

export default axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=7591bc02e9771a51350c36f35a7b1d7e`
});