import React from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[]
        }
    }

    handleCommentSubmit(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.setState(function(prevState){
            return {
                comments:[
                    comment,
                    ...prevState.comments
                    
                ]
            }
        })
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleCommentSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;