import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        movieTitle:''
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        console.log(this.state.movieTitle)
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h3 className='display-3 text-center'>
                            <i className="fas fa-film">Search for a Movie</i>
                            </h3>
                            <input type="text" placeholder='Movie title...' name='movieTitle' value={this.state.movieTitle} onChange={this.onChange}/>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search