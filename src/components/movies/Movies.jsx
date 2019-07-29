import React, { Component } from 'react';
import { Consumer } from '../../context';
class Movies extends Component {
    render(){
        return(
            <Consumer>
                {value => {
                    console.log(value)
                    return <h1>hello</h1>
                }}
            </Consumer>
        )
    }
}
export default Movies