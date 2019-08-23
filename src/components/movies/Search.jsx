import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        query:''
    }
     findMovie = (dispatch,e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
        .then(res =>  
             dispatch({
            type:'SEARCH_MOVIES',
            payload: res.data.results,
            query: this.state.query,
            total:res.data.total_results,
            pages:res.data.total_pages
        }) )
    } 
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (
            <Consumer>
                {value => {
                     const {dispatch} = value
                        return (
                        <div className="card card-body mb-4 p-4">
                            <h2 className='display-5 text-center mb-3'>
                            <i className="fa fa-video-camera">{' '}Search for a Movie</i>
                            </h2>
                            <form  onSubmit = {this.findMovie.bind(this,dispatch)}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                    <input 
                                        className="form-control py-2 border-right-0 border" 
                                        type="search" placeholder="Movie title..." 
                                        name='query' 
                                        value={this.state.query} 
                                        onChange={this.onChange} />
                                    <button className="btn btn-primary btn-block" type="submit">Search</button>
                                </div>
                            </form>     
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search