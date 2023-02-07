import React from 'react'
import Movie from './Movie';

function Movies(props) {
    const {movies = []} = props;

  return (
    <div className='movies'>
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
        )) : <h4>We Can't Find Movie :(</h4>}       
    </div>
  )
}

export default Movies