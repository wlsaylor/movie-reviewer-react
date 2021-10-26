import React, { Component } from 'react';
import Stars from './stars';

export default class ReviewForm extends Component {
    render() {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="movieReview" className="form-label">
                        Leave a review!
                    </label>
                    <input type="textarea" className="form-control" id="movieReview"></input>
                </div>
                <Stars />
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        )
    }
}
