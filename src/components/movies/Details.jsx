import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';

class Details extends Component {
    state = {
        videos : {}
      }
    async componentDidMount(){
        await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=9b92096f6cb5ae922d214aed2bfedc05&language=en-US`)
        .then(res => this.setState({videos:res.data.results[0]}))
    }
    
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { 
              autoplay: 0
            }
          };
          console.log(this.state.videos)
        return (
            <YouTube
            videoId={this.state.videos.key}
            opts={opts}
          />
        );
    }
}

export default Details;