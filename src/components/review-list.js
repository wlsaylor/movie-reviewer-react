import React, { Component } from 'react';
import Review from './review';

export default class ReviewList extends Component {
    render() {
        return (
            <div>
                <Review />
                <Review />
            </div>
        )
    }
}
