import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class Stars extends Component {
    render() {

        const stars = [];
        const movieRating = parseInt(this.props.reviewRating);
        if (movieRating) {
            for(let i = 0; i < movieRating; i++) {
            const randomId = Math.floor(Math.random() * 100000000);
            stars.push(<FontAwesomeIcon key={randomId} icon={faStar} color="gold"/>);
            }
        }

        return (
            <div>{stars}</div>
        )
    }
}
