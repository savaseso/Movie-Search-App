import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash';


class Pagination extends Component {
    state = {
        startIndex: 0,
        endIndex: 5,
        currentPage: 1
    }
    onPageChange = (page) => {
        const { heading, query, genreId } = this.props
        this.setState({
            currentPage: page
        })
        if (heading === 'Top 20 Movies') {
            this.getData(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        } else if (heading === 'Category results') {
            this.getData(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`)
        } else {
            this.getData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
        }
    }
    getData = async (url) => {
        try {
            const res = await axios.get(url)
            this.props.dispatch({
                type: 'PAGINATION',
                payload: res.data.results
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    validateIndex = index => index >= 0 && index <= this.props.totalPages;
    prevPage = () => {
        const { startIndex, endIndex } = this.state;
        if (this.validateIndex(startIndex - 5) && this.validateIndex(endIndex - 5)) {
            this.setState({
                startIndex: startIndex - 5,
                endIndex: endIndex - 5,
            });
        }
    };

    nextPage = () => {
        const { startIndex, endIndex } = this.state;
        if (this.validateIndex(startIndex + 5) && this.validateIndex(endIndex + 5)) {
            this.setState({
                startIndex: startIndex + 5,
                endIndex: endIndex + 5,
            });
        }
    };

    render() {
        const { startIndex, endIndex, currentPage } = this.state
        const { totalPages } = this.props
        const pages = _.range(1, totalPages + 1)
        if (totalPages > 1) {
            return (
                <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        {pages.length > 6 ? <li className="page-item">
                            <Link className="page-link" to="" onClick={this.prevPage}>Previous</Link>
                        </li> : null}
                        {pages.slice(startIndex, endIndex).map(page => (
                            <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
                                <Link to='' className="page-link" onClick={() => { this.onPageChange(page) }}>{page}</Link>
                            </li>
                        ))}
                        {pages.length > 6 ? <li className="page-item">
                            <Link className="page-link" to="" onClick={this.nextPage}>Next</Link>
                        </li> : null}
                    </ul>
                </nav>
            )
        } else {
            return null;
        }
    }
}

export default Pagination;