import React from 'react';
import Proptypes from 'prop-types'

// function Movie({id,year,title,summary,poster}){
//     return<div>Movie component</div>
// }
function Movie({id,year,title,summary, poster}){
return (
    <div class="movie">
        <img src={poster} alt={title} title={title}/>
        <div class="moive__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
}



export default Movie; 