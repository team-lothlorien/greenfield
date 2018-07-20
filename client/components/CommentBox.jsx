import React from 'react';
import axios from 'axios';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
//gets doctor, loggedIn, and username
class CommentBox extends React.Component{
  state = {
    input: '',
    comments: [{doctorId: 132624799, username: 'peter', comment:'hello', date: 'January 24, 2018'}]
  }
  
  componentDidMount = () => {
    this.getComments();
  }

  // handleInputChange = (e) => {
  //   this.setState({
  //     input: e.target.value
  //   })
  // }

  getComments = () => {
    // console.log('props doctor ', this.props.doctor);
    axios.get('/comments', { 
      params: {
        doctorId: this.props.doctor.npi
      }
    })
    .then(res => {
      console.log('CommentBox/getComments getting results back from get', res);
      this.setState({
        comments : res.data
      })
    })
    .catch(err => console.error('Problem fetching comments: ', err));
  }
  deleteComment = () => {
    let doctorId = this.props.doctor.npi;
    axios.delete('/comments', {
      username: username,
      doctorId: doctorId
    })
    .then(res => console.log('Deleting comment', res))
  }
  handleCommentSubmit = (comment) => {
    console.log('comment in handlecommentSubmit in commentbox:', comment)
    let comments = this.state.comments;
    console.log('comments in commenbox handlecommentSubmit:', comments)
    let newComments = comments.concat([comment]);
    console.log('newComments in comentbox:', newComments);
    this.setState({comments: newComments});
    axios.post('/comments', { 
      doctorId: this.props.doctor.npi,
      username: comment.username,
      comment: comment.comment
    })
    .then(res => console.log('CommentBox/handleCommentSubmit getting results back from post', res))
  }
  render() {
    return(
    <div className="CommentBoxCard">
      <CommentForm 
        handleCommentSubmit={this.handleCommentSubmit}
        loggedIn={this.props.loggedIn}
        username={this.props.loggedIn? this.state.username : 'Guest'}
        doctorNPI={this.props.doctor.npi}
      />
      <CommentList
        username={this.state.username}
        comments={this.state.comments}
        deleteComment={this.deleteComment}
      />
    </div>
  )}
}

export default CommentBox;