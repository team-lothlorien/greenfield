import React from 'react';

let CommentList = (props) => {
  return (
    <div className="comment-list">
      {/* {props.comments.forEach(commentObj => {
        return ( */}
          <div className="comment-entry">
            {/* <h4>{props.commentObj.username}</h4> */}
            {/* <h5>{props.commentObj.date}</h5> */}
            {/* <div className="message">{commentObj.comment}</div> */}
            <h4>Peter</h4>
            <h5>January 5, 2018</h5>
            <div>He was a good doctor</div>
          </div>
        )
      {/* }) */}
      }
    </div>
  )
};


export default CommentList;