import React, { Component } from 'react';
import Stars from './stars';

export default class Review extends Component {
    render() {
        return (
            <div className="card m-2">
                <Stars />
                <p>Review: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit eaque nemo ratione odio dolores voluptatem. Cupiditate natus dolor consequatur, enim, explicabo quisquam aspernatur hic fuga, corporis voluptatem exercitationem quas necessitatibus.</p>
            </div>
        )
    }
}
