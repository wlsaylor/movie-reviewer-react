import React, { Component } from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';

export default class movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }

    reviewForm = (reviewContent, reviewRating) => {
        const randomId = Math.floor(Math.random() * 100000000);
        const newReview = {
            id: randomId,
            reviewContent,
            reviewRating,
        }
        this.setState({reviews: [...this.state.reviews, newReview] });
    }

    render() {
        return (
            <div className="card col-12 bg-dark text-light border border-warning">
                <div className="card-header mb-1 row">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="card-body m-1 p-2 row">
                    <div className="col-xl-4  d-flex justify-content-center text-center">
                        <img src={this.props.img} alt={this.props.title} width="350"/>
                    </div>
                    <div className="col-xl-7 m-3 p-1">
                        <p>{this.props.description}</p>
                        <p className="text-warning">imdbRating: {this.props.imdbRating} <a href={this.props.imdbLink}>{this.props.imdbLink}</a></p>
                        <ReviewList reviews={this.state.reviews}/>
                    </div>
                </div>
                <div className="card-footer m-1">
                    <ReviewForm reviewForm={this.reviewForm}/>
                </div>
            </div>
        )
    }
}
