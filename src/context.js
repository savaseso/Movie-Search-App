import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();
export class Provider extends Component {
    state = {
        movie_list: [],
        heading: `Top 20 Movies`
    }
    async componentDidMount(){
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(res=>this.setState({movie_list:res.data.results}))
            .catch(err => console.log(err))
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer =  Context.Consumer;