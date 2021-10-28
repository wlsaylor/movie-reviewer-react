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
        const randomId = Math.floor(Math.random() * 123903498);
        const newReview = {
            id: randomId,
            reviewContent,
            reviewRating,
        }
        this.setState({reviews: [...this.state.reviews, newReview] });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header m-1">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="card-body m-1">
                    <img src={this.props.img} alt={this.props.title} width="300"/>
                    <p>{this.props.imdbRating}</p>
                    <a href={this.props.imdbLink}>{this.props.imdbLink}</a>
                    <p>{this.props.description}</p>
                </div>
                <div className="card-footer m-1">
                    <ReviewList reviews={this.state.reviews}/>
                    <ReviewForm reviewForm={this.reviewForm}/>
                </div>
            </div>
        )
    }
}
