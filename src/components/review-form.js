import React, { Component } from 'react';

export default class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewContent: '',
            reviewRating: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.reviewForm(this.state.reviewContent, this.state.reviewRating);
        this.setState({reviewContent: '', reviewRating: ''})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form className="mb-1" onSubmit={this.onSubmit}>
                <div className="mb-2 p-1 row">
                    <input required type="textarea" name="reviewContent" className="form-control bg-transparent text-light" placeholder="Leave a review!" id="reviewContent" value={this.state.reviewContent} onChange={this.onChange}></input>
                </div>
                <div className="row d-flex justify-content-between p-1">
                    <select required name='reviewRating' className="form-control w-25 col-2 bg-dark text-light text-center" value={this.state.reviewRating} onChange={this.onChange}>
                        <option defaultValue value='0'>Rating</option>
                        <option value='1'>One Star</option>
                        <option value='2'>Two Stars</option>
                        <option value='3'>Three Stars</option>
                        <option value='4'>Four Stars</option>
                        <option value='5'>Five Stars</option>
                    </select>           
                    <button type="submit" className="btn btn-warning col-3">Submit Review</button>
                </div>
            </form>
        )
    }
}
