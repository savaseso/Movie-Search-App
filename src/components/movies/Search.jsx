import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        movieTitle:''
    }
    findMovie = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&query=${this.state.movieTitle}&page=1&include_adult=false`)
        .then(res => console.log(res.data))
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h3 className='display-3 text-center'>
                            <i className="fas fa-film">Search for a Movie</i>
                            </h3>
                            <form onSubmit = {this.findMovie}>
                                <input type="text" placeholder='Movie title...' name='movieTitle' value={this.state.movieTitle} onChange={this.onChange}/>
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search