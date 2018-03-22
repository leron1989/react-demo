import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import wrapWithLoadData from './wrapWithLoadData';

class CommentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments:this.props.data || []
        }
        console.log(this.state)
    }

    //改为通过高阶函数实现
    // componentWillMount(){
    //     this._loadComments();
    // }

    // _loadComments(){
    //     let comments = localStorage.getItem('comments')
    //     if (comments) {
    //         comments = JSON.parse(comments)
    //         this.setState({ comments })
    //     }
    // }

    // _saveComments(comments){
    //     localStorage.setItem("comments", JSON.stringify(comments));
    // }

    handleCommentSubmit(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.setState(function(prevState){
            const newComments = [
                comment,
                ...prevState.comments
            ];
            // this._saveComments(newComments);
            this.props.saveData(newComments);
            return {
                comments:newComments
            }
        })
    }

    handelCommentDel(index){
        this.setState(function(prevState){
            const newComments = prevState.comments
            newComments.splice(index, 1)
            this._saveComments(newComments)
            return {
                comments: newComments
            }
        })
        // const comments = this.state.comments
        // comments.splice(index, 1)
        // this.setState({ comments })
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleCommentSubmit.bind(this)}/>
                <CommentList onDelComment={this.handelCommentDel.bind(this)} comments={this.state.comments}/>
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp