import React from 'react';

let CommentList = (props) => {
  // if(props.username !== null || username !== '' || username !== 'Guest') {
  return (
    <ul className="comment-list">
      {props.comments.forEach(commentObj => {
        return (
          <li className="comment-entry">
            <h4>{commentObj.username}</h4>
            <h5>{commentObj.date}</h5>
            <div className="message">{commentObj.comment}</div>
            {/* If currUser = username, conditional render of delete comment */}
            <button onClick={() => {this.props.deleteComment()}}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
// } else {
//     return (<div>Sign in to see user reviews</div>)
//   }
};


export default CommentList;


{/* <ul className="movies">
        {this.props.movies.map(movie => (
            <li key={movie.id} className="movie_item" value={movie} onClick={() => {this.props.showFaves ? this.props.deleteMovie(movie) : this.props.saveMovie(movie)}}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className="movie_description">
              <h2>{movie.title}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">{movie.title}</span>
                  <span>{movie.release_date}</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>{movie.vote_average}</span>
                </div>
              </section>
            </div>
            </li>
        ))}
      </ul> */}