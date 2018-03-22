import React from 'react';
import CommentList from '../components/CommentList';
import { connect } from 'react-redux';
import { initComments, deleteComment } from '../reducers/commentReducer'

class CommentListContainer extends React.Component{

  componentWillMount(){
    this._loadComments()
  }

  _loadComments(){
    let comments = localStorage.getItem("comments");
    comments = comments ? JSON.parse(comments) : []
    if(this.props.initComments){
      this.props.initComments(comments)
    }
  }


  handleCommentDelete(index){
    const {comments} = this.props;
    const newComments = [
      ...comments.splice(0, index),
      ...comments.splice(index + 1)
    ];
    localStorage.setItem("comments", newComments);
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index)
    }
  }

  render(){
    return (
      <CommentList comments={this.props.comments} 
        onDelComment={this.handleCommentDelete.bind(this)}/>
    )
  }
  
}

const mapStateProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments))
    },
    onDeleteComment: (index) => {
      dispatch(deleteComment(index))
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(CommentListContainer)