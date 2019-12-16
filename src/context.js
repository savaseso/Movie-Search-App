import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();
const reducer = (state, action) => {

    switch (action.type) {
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movie_list: action.payload,
                heading: 'Search Results',
                query: action.query,
                total_results: action.total,
                total_pages: action.pages
            }
        case 'PAGINATION':
            return {
                ...state,
                movie_list: action.payload,
            }
        case 'GENRES':
            return {
                ...state,
                movie_list: action.payload,
                heading: 'Category results',
                genreId: action.id,
                total_results: action.total,
                total_pages: action.pages
            }
        default:
            return state
    }
}

export class Provider extends Component {
    state = {
        movie_list: [],
        genres: [],
        genreId: 0,
        total_results: 0,
        total_pages: 0,
        query: '',
        heading: `Top 20 Movies`,
        dispatch: action => this.setState(state => reducer(state, action))
    }
    async componentDidMount() {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            const genres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`)
            this.setState({
                movie_list: res.data.results,
                total_results: res.data.total_results,
                total_pages: res.data.total_pages,
                genres: genres.data.genres
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        console.log(this.state.query)
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;