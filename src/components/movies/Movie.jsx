import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    console.log(props.movie)
    const { title, backdrop_path,id,vote_average,original_language } = props.movie
return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm" >
            <div className="d-flex">
                <img className="card-img-top" style={{width:'250px',height:'130px'}} src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="Movie Pictures"/>
                <div className="card-body">
                    <h6 className="card-title">{title.length>32 ? title.slice(0,title.search(':')): title}</h6>
                    <p className="card-text">score: <strong>{vote_average}</strong></p>
                    <p className="card-text">language: <strong>{original_language}</strong></p>
                </div>
            </div>
            <Link to={`movie/${id}`} className="btn btn-dark mt-2">Details...</Link>
            </div>
        </div>
    )
}
export default Movie