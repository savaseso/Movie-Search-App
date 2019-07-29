import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();
const apiKey = '9b92096f6cb5ae922d214aed2bfedc05'
export class Provider extends Component {
    state = {
        movie_list: [],
      heading: 'Top 10 Movies'
    }
    async componentDidMount(){
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(res=>this.setState({movie_list:res.data.results}))
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