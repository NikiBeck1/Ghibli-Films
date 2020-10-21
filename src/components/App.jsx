import React from 'react'
import Movies from './Movie'
import Person from './Person'
import logo from './logo.png';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            loadMovies: false,
            loadPeople: false,
            peopleList: [] 
        }
    }
    

    movieBtnClick () {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(obj => this.setState({
            movieList: obj
        }))
    }
    
    peopleBtnClick () {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(obj => this.setState({
            peopleList: obj
        }))
    }

    render() {
        return (
            <div className="header">
                <header>
                <img className='logo' src={logo}/></header>
                <button onClick={() => this.movieBtnClick()} className='main-button'>Load Movies</button>
                <button onClick={() => this.peopleBtnClick()} className='main-button'>Load People</button>
                <Movies movies={this.state.movieList} />
                <Person person={this.state.peopleList} />
            </div>
        )
    }
}

export default App;

