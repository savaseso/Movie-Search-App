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
                query:action.query
            }
        case 'PAGINATION':
            return {
                ...state,
                movie_list: action.payload,
            }
        default:
            return state
    }  
}

export class Provider extends Component {
    state = {
        movie_list: [],
        query:'',
        heading: `Top 20 Movies`,
         dispatch: action => this.setState(state => reducer(state, action))
     }
    async componentDidMount() {
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(res => this.setState({ movie_list: res.data.results}))
            .catch(err => console.log(err))
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