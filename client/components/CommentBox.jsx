import React from 'react';
import CommentList from './CommentList.jsx';

class CommentBox extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     input: '',
  //     comments: [],
  //   }
  // }
  state = { input: '', comments: [] };
  
  componentDidMount() {
    this.getComments();
  }

  // handleInputChange (e) {
  //   this.setState({
  //     input: e.target.value
  //   })
  // }
  // getComments() {
  //   axios
  // }
  render() {
    return(
    <div className="CommentBoxCard">
      {/* Comment Box Text Input Here */}
      {/* Comment Box Submit Button Here */}
      {/* List of Comments for this Doctor Here */}
      <CommentList comments={this.state.comments}/>
      {/* If currUser = username, conditional render of delete comment */}
    </div>
  )
  }
}

export default CommentBox;

//text input = stateful
//comment list == its own component -- map over something

