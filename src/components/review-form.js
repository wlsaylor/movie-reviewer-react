import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar}/>
console.log(star);

export default class ReviewForm extends Component {
    state = {
        reviewContent: '',
        reviewRating: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.reviewForm(this.state.reviewContent, this.state.reviewRating);
        this.setState({reviewContent: '', reviewRating: ''})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="reviewContent" className="form-label">
                        Leave a review!
                    </label>
                    <input type="textarea" name="reviewContent" className="form-control" id="reviewContent" value={this.state.reviewContent} onChange={this.onChange}></input>
                </div>
                <label htmlFor="reviewRating">Rate this movie!</label>
                <select name='reviewRating' value={this.state.reviewRating} onChange={this.onChange}>
                    <option value='oneStar'>One Star</option>
                    <option value='twoStars'>Two Stars</option>
                    <option value='threeStars'>Three Stars</option>
                    <option value='fourStars'>Four Stars</option>
                </select>           
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        )
    }
}
