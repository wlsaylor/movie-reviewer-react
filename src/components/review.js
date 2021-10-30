import React, { Component } from 'react';
import Stars from './stars';

export default class Review extends Component {
    render() {
        return (
            <div className="card text-light bg-dark border border-warning">
                <div className="card m-2 text-light bg-dark">
                    <p>{this.props.reviewContent}</p>
                </div>
                <div className="card-footer m-1">
                    <div><Stars reviewRating={this.props.reviewRating} /></div>
                </div>
            </div>
        )
    }
}
