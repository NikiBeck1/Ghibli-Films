import React from 'react';
import MovieCard from './MovieCard'

let Movie = (props) => {
    return props.movies.map(movie => <MovieCard movie={movie}/>)
    }
    

export default Movie;