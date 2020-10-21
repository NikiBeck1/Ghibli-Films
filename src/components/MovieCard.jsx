import React from 'react';
import Movie from './Movie'

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className="all-movies">
                <div className="card-div">
                    <div className="card-body">
                        <h5 class="card-content">{this.props.movie.title}</h5>
                        <p class="card-content">{this.props.movie.description}</p>
                        <a className='movie-button' target="_blank" href={this.props.movie.url}>View Movie Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;