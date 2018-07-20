import React from 'react';

class CommentForm extends React.Component {
  state = {
    comment: ''
  }
  handleTextChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let username = props.username;
    let comment = this.state.comment;
    if(!text || !username) {
      return
    }
    this.props.onCommentSubmit({
      username: username,
      comment: text
    })
    this.setState({
      text: comment
    })
  }
  render = () => (
    <form className="commentForm" onSubmit={this.handleSubmit}>
      <div>{this.props.username}</div>
      <input 
        type="text"
        placeholder="Leave a comment..."
        value={this.state.comment}
        onChange={this.handleTextChange}
      />
      <input 
        type="submit"
        value="Post"
      />
    </form>

  )
};


export default CommentForm;