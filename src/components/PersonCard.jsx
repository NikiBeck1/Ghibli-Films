import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className="all-movies">
                <div className="card-div">
                    <div className="card-body">
                        <h5 class="card-content">
                            {this.props.person.name}</h5>
                        <p class="card-content">
                            {this.props.person.age}
                            <br/>
                            {this.props.person.gender}
                        </p>
                        <a className='movie-button' target="_blank" href={this.props.person.url}>View Actor Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonCard;