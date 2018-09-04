import React from 'react';
import moment from 'moment';

class CommentForm extends React.Component {
  state = {
    input: ''
  }
  handleTextChange = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    // console.log('e from handleclick in comment form', e)
    let username = this.props.username;
    // console.log('username in commentform handleclick', username)
    let input = this.state.input;
    if (!input || !username) {
      return
    }
    this.props.handleCommentSubmit({
      username: username,
      comment: input,
      date: moment().format('MMMM Do, YYYY'),
    })
    this.setState({
      input: ''
    })
  }
  render = () => {
    // if (this.props.loggedIn)
    return (
      <form className="commentForm" onSubmit={(e) => { this.handleClick(e) }}>
        <div>{this.props.username}</div>
        <textarea
          type="text"
          placeholder="Leave a comment..."
          value={this.state.comment}
          onChange={this.handleTextChange}>
        </textarea>
        <input
          type="submit"
          value="Post"
          // {this.props.getComments()}
        />
      </form>
    )
    // else {
    //       return (
    //         <div>Please Log In to Leave a Review!</div>
    //       )
    //     }
  }
};


export default CommentForm;