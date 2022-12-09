import MovieUI from "./MovieUI";
import {Movie} from "./movieSlice";
import React from "react";
import { Link } from "react-router-dom";

export default function MovieList(props:any) {
    const {movies} = props;
    console.log('Movie List ',movies);
    return (<div className={"MainMovie"}>
        {
            movies.map((movie:Movie)=> <MovieUI
                    key={movie._id}
                    movie={movie}>
                    </MovieUI>
            )
        }
    </div>);
}