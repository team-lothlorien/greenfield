import React from 'react';
import axios from 'axios';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

class CommentBox extends React.Component{
  state = {
    username: this.props.username,
    input: '',
    comments: [{doctorId: 132624799, username: 'peter', comment:'hello', date: 'January 24, 2018'}]
  }
  
  componentDidMount = () => {
    this.getComments();
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  getComments = () => {
    // console.log('props doctor? ', this.props.doctor);
    axios.get('/comments', { 
      params: {
        doctorId: this.props.doctor.npi
      }
    })
    .then(res => {
      console.log('res', res);
      this.setState({
        comments : res.data
      })
    })
    .catch(err => console.error('Problem fetching comments: ', err));
  }
  handleCommentSubmit = (comment) => {
    axios.post('/comments', { })
  }
  render() {
    return(
    <div className="CommentBoxCard">
      <CommentForm 
        username={this.state.username}
        doctorNPI={this.props.doctor.npi}
      />
      <CommentList
        comments={this.state.comments}
      />
      {/* If currUser = username, conditional render of delete comment */}
    </div>
  )}
}

export default CommentBox;

//text input = stateful
//comment list == its own component -- map over something

