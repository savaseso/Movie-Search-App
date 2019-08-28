import React from 'react'
import { Link } from 'react-router-dom'
import getGenres from '../movies/genres.json'

const Genres = (props) => {
    console.log(props.genres)
   
    return (
        <div className="dropdown show">
        <Link className="btn btn-secondary dropdown-toggle" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genres
        </Link>
      
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {getGenres.map(genre => 
                <Link key={genre.id}className="dropdown-item" onClick = {()=>props.getGenreId(genre.id)} to="">{genre.name}</Link>
            )}
        </div>
      </div>
    )
}

export default Genres