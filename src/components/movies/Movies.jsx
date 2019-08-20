import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner';
import Pagination from '../layouts/Pagination'
import Movie from './Movie'

const Movies = () => {
        return(
            <Consumer>
                {value => {
                    const { movie_list,heading,movie_items,dispatch,query } = value
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
                                <Pagination itemsCount = {movie_items} pageSize = {movie_list.length} dispatch = {dispatch} heading = {heading} query={query}/>
                            </React.Fragment>
                        )} 
                }}
            </Consumer>
        )
    }

export default Movies