import React, { Component } from 'react';
import Movie from './movie';
import dune from '../movie-imgs/dune.jpg';
import halloweenKills from '../movie-imgs/halloween-kills.jpg';
import noTimeToDie from '../movie-imgs/no-time-to-die.jpg';

export default class MovieList extends Component {
    render() {
        const movieArray = [
            //All Data from IMDb.com
            {
                id: 1,
                title: "Dune",
                img: dune,
                description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
                imdbRating: "8.3",
                imdbLink: "https://www.imdb.com/title/tt1160419/",
            },
            {
                id: 2,
                title: "Halloween Kills",
                img: halloweenKills,
                description: "The saga of Michael Myers and Laurie Strode continues in the next thrilling chapter of the Halloween series.",
                imdbRating: "5.8",
                imdbLink: "https://www.imdb.com/title/tt10665338/",
            },
            {
                id:3,
                title: "No Time to Die",
                img: noTimeToDie,
                description: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
                imdbRating: "7.6",
                imdbLink: "https://www.imdb.com/title/tt2382320/",
            }
        ];

        let movies;
        if (movieArray) {
            movies = movieArray.map((movie, id) => <Movie key={id} {...movie} />);
        }

        return (
            <div className="container d-flex flex-column bg-dark">
                <h1 className="text-light mb-3">Top Movies</h1>
                <div>{movies}</div>
            </div>
        )
    }
}
