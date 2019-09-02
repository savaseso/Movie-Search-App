import React, {Component} from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner';
import Pagination from '../layouts/Pagination'
import Movie from './Movie'
import Genres from './Genres'

class Movies extends Component {
    state = {
        id:0
    }
     getGenreId = (id) => {
        this.setState({id}) //class base component?! and the filter movie_list
      }
      render(){
        return(
            <Consumer>
                {value => {
                    const { movie_list,heading,total_results,dispatch,query,total_pages, genres } = value
                    const filteredMovies = movie_list.filter(movie => {
                        return this.state.id === 0 ? movie_list : movie.genre_ids.includes(this.state.id)  
                    })
                    console.log(filteredMovies.length)
                     if(movie_list === undefined || movie_list.length === 0){
                        return <Spinner />
                    } else { 
                        return (
                            <React.Fragment>
                                <h3 className='text-center mb-4'>{heading}</h3>
                                {heading === 'Top 20 Movies'?<Genres getGenreId = {this.getGenreId} genres = {genres} />:null}
                                <p style={{textAlign:'right'}}><strong>{total_results}</strong>{' '}movies in the database.</p>
                                <div className="row">
                                    {filteredMovies.map(movie=>(
                                        <Movie key={movie.id} movie={movie}/>
                                    ))}
                                </div>
                                <Pagination 
                                    totalPages = {total_pages} 
                                    itemsCount = {total_results} 
                                    pageSize = {movie_list.length} 
                                    dispatch = {dispatch} 
                                    heading = {heading} 
                                    query={query}/>
                            </React.Fragment>
                        )} 
                }}
            </Consumer>
        )
            }
    }

export default Movies