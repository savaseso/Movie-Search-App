import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash';


class Pagination extends Component {
    onPageChange = (page) => {
        const {heading, dispatch,query } = this.props
         if(heading === 'Top 20 Movies'){ 
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
                    .then(res =>  
                        dispatch({
                        type:'PAGINATION',
                        payload: res.data.results
            }) )} else {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
                .then(res =>  
                    dispatch({
                    type:'PAGINATION',
                    payload: res.data.results
                }) ) 
         } 
    }

    render(){
        const pagesCount = Math.ceil(this.props.itemsCount/this.props.pageSize)
        if(this.props.pageSize < 20) return null;
        const pages = _.range(1, pagesCount + 1)
        console.log(pages)
            return (
                    <nav aria-label="...">
                        <ul className="pagination pagination-lg">
                            {pages.slice(0,8).map(page=>(
                                <li key = {page} className="page-item mx-auto">
                                    <Link to='' className="page-link" onClick={()=>this.onPageChange(page)}>{page}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
            )
    }
}

export default Pagination;