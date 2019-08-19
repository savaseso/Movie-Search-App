import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom'

class Details extends Component {
    state = {
        videos : {},
        details: {}
      }
    async componentDidMount(){
        await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`)
        .then(res => {this.setState({videos:res.data.results[0]})

        return axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`)

      })
        .then(res => this.setState({details:res.data}))
        .catch(err => console.log(err))
         
    }
    
    render() {
      const {original_title,overview,release_date} = this.state.details
      const {videos,details} = this.state
      console.log(this.state.details)
        if(Object.keys(videos).length === 0 || videos === undefined || details === undefined || Object.keys(details).length === 0){
          return <Spinner />
        } else {
          return (
            <div className="container">
               <Link className="btn btn-dark btn-sm mb-4" to='/'> Go Back</Link>
               <div className="card">
                 <h4 className="card-header">
                  {original_title} {<span className="font-weight-light">({release_date.slice(0,4)})</span>}
                 </h4>
               </div>
               <h5 className="mt-4">Overview</h5>
               <p>{overview}</p>
               <div className='d-flex justify-content-between mt-5'>
                 <ul className="list-group mt-3">
                    <li className="list-group-item"><strong>Homepage:</strong>{' '}<a href={details.homepage} target="blank">{details.homepage}</a></li>
                    <li className="list-group-item"><strong>Runtime:</strong>{' '}{details.runtime} min</li>
                    <li className="list-group-item"><strong>Revenue:</strong>{' '}{details.revenue}</li>
                 </ul>
                 <YouTube videoId={this.state.videos.key} opts={opts} />
               </div>
             </div>
       );
        }
        
    }
}

const opts = {
  height: '390',
  width: '640',
  playerVars: { 
    autoplay: 0
  }
};

export default Details;