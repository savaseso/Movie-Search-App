import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    const { title, backdrop_path,id,vote_average,original_language } = props.movie
return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm" >
            <div className="d-flex">
                <img className="card-img-top" style={{width:'250px',height:'130px'}} src={bgImage(backdrop_path)} alt="Movie Pictures"/>
                <div className="card-body">
                    <h6 className="card-title">{title.length>32 ? title.slice(0,title.search(':')): title}</h6>
                    <p className="card-text">score: <strong>{vote_average}</strong></p>
                    <p className="card-text">language: <strong>{original_language}</strong></p>
                </div>
            </div>
            <Link to={`movie/details/${id}`} className="btn btn-outline-dark btn-sm mt-2">More Info</Link>
            </div>
        </div>
    )
}

const bgImage = (backdrop_path) => backdrop_path?`https://image.tmdb.org/t/p/original${backdrop_path}`:`https://via.placeholder.com/250x130`

export default Movie