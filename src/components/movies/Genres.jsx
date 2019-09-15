import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Genres = (props) => {
    const getGenreId = (id) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
        .then(res => 
            props.dispatch({
            type:'GENRES',
            payload: res.data.results,
            id: id,
            total:res.data.total_results,
            pages:res.data.total_pages
        }) )
    }   
    return (
        <div className="dropdown show">
        <Link className="btn btn-secondary dropdown-toggle" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genres
        </Link>
      
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {props.genres.map(genre => 
                <Link key={genre.id}className="dropdown-item" onClick = {()=>getGenreId(genre.id)} to="">{genre.name}</Link>
            )}
        </div>
      </div>
    )
}

export default Genres