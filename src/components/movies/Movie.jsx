import React from 'react'

const Movie = (props) => {
    console.log(props.movie)
    const { title, backdrop_path } = props.movie
return(
    
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <img src='' alt=''/>
                    <h5>{title}</h5>
                </div>
            </div>
        </div>
    
    )
}
export default Movie