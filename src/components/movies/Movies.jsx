import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner'
import Movie from './Movie'
class Movies extends Component {
    render(){
        return(
            <Consumer>
                {value => {
                    const { movie_list,heading } = value
                    console.log(value)
                    if(movie_list === undefined || movie_list.length === 0){
                        return <Spinner />
                    } else { 
                        return (
                            <React.Fragment>
                                <h3 className='text-center mb-4'>{heading}</h3>
                                <div className="row">
                                    {movie_list.map(movie=>(
                                        <Movie key={movie.id} movie={movie}/>
                                    ))}
                                </div>
                            </React.Fragment>
                        )} 
                }}
            </Consumer>
        )
    }
}
export default Movies