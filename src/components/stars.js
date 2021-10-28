import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar}/>

export default class Stars extends Component {
    render() {
        return (
            <div>
                {star}{star}{star}
            </div>
        )
    }
}
