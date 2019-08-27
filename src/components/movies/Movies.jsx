import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner';
import Pagination from '../layouts/Pagination'
import Movie from './Movie'
import Genres from './Genres'

const Movies = () => {
    const getGenreId = (id) => {
        console.log(id) //class base component?! and the filter movie_list
      }
        return(
            <Consumer>
                {value => {
                    const { movie_list,heading,total_results,dispatch,query,total_pages,genres } = value
                    console.log(movie_list)
                    if(movie_list === undefined || movie_list.length === 0){
                        return <Spinner />
                    } else { 
                        return (
                            <React.Fragment>
                                <h3 className='text-center mb-4'>{heading}</h3>
                                <Genres getGenreId = {getGenreId} genres = {genres} />
                                <p style={{textAlign:'right'}}><strong>{total_results}</strong>{' '}movies in the database.</p>
                                <div className="row">
                                    {movie_list.map(movie=>(
                                        <Movie key={movie.id} movie={movie}/>
                                    ))}
                                </div>
                                <Pagination totalPages = {total_pages} itemsCount = {total_results} pageSize = {movie_list.length} dispatch = {dispatch} heading = {heading} query={query}/>
                            </React.Fragment>
                        )} 
                }}
            </Consumer>
        )
    }

export default Movies