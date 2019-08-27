import React from 'react'
import { Link } from 'react-router-dom'

const Genres = (props) => {
    console.log(props.genres)
   
    return (
        <div className="dropdown show">
        <Link className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </Link>
      
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {props.genres.map(genre => 
                <Link className="dropdown-item" onClick = {()=>props.getGenreId(genre.id)} href="#">{genre.name}</Link>
            )}
        </div>
      </div>
    )
}

export default Genres